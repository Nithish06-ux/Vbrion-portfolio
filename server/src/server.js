require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const aiRoutes = require('./routes/aiRoutes');
const ctaRoutes = require('./routes/ctaRoutes');
const ctaRepository = require('./repositories/ctaRepository');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middlewares
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173', 'http://localhost:5175'],
  credentials: true
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Database connection (graceful fallback if MongoDB is not running locally)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vbrion_portfolio';

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 2500,
})
.then(() => {
  console.log('[Database] Connected successfully to MongoDB:', MONGODB_URI);
})
.catch((err) => {
  console.warn('[Database] MongoDB connection failed or offline:', err.message);
  console.log('[Database] Using Abstracted Persistent CTA Repository. Data layer is completely active and resilient.');
});

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/cta', ctaRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/ai', aiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'vbrion-portfolio-server',
    dbState: mongoose.connection.readyState === 1 ? 'connected' : 'persistent-disk-db',
    ctaDb: {
      isPersistent: true,
      records: ctaRepository.memoryCache.length,
    }
  });
});

// Global 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('[ServerError]', err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'An unexpected server error occurred.'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`vbrion Portfolio API running on port ${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
});

module.exports = app;
