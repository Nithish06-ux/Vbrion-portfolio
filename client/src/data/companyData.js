/**
 * vbrion Company Content & Section Metadata
 * Capabilities, Industries, Process, Testimonials, Team
 */

export const capabilitiesData = [
  {
    id: 'data-analytics',
    title: 'Data Analytics & Lakehouses',
    subtitle: 'Unified telemetry & high-throughput pipelines',
    description: 'Engineering reliable data pipelines, lakehouse architectures, and semantic data models that transform messy silos into query-ready enterprise assets.',
    icon: 'Database',
    accent: '#00D4FF',
    badges: ['Snowflake', 'BigQuery', 'Databricks', 'Apache Spark', 'dbt', 'Kafka', 'PostgreSQL']
  },
  {
    id: 'ai-ml',
    title: 'AI / ML & Predictive Intelligence',
    subtitle: 'Mathematical precision & autonomous cognition',
    description: 'Custom neural architectures, computer vision, time-series forecasting, and generative AI systems with full interpretability and governance.',
    icon: 'Brain',
    accent: '#1AA3E0',
    badges: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'Hugging Face', 'LangChain', 'MLflow', 'FastAPI']
  },
  {
    id: 'dashboards-bi',
    title: 'Dashboards & BI Visualizations',
    subtitle: 'Boardroom-ready foresight cockpits',
    description: 'Translating complex multidimensional data into intuitive, real-time command centers that enable executives to make decisive moves with confidence.',
    icon: 'LayoutDashboard',
    accent: '#00D4FF',
    badges: ['Power BI', 'Tableau', 'Apache Superset', 'D3.js', 'Looker', 'Metabase']
  },
  {
    id: 'web-app',
    title: 'Web & App Engineering',
    subtitle: 'High-performance digital products',
    description: 'Designing resilient, accessible, and hyper-responsive web applications powered by modern JavaScript frameworks and scalable backend APIs.',
    icon: 'Code2',
    accent: '#1AA3E0',
    badges: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'REST APIs']
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure Modernisation',
    subtitle: 'Elastic, zero-trust cloud architectures',
    description: 'Cloud migration blueprints, Kubernetes container orchestration, serverless microservices, and FinOps cloud spend optimization.',
    icon: 'Cloud',
    accent: '#00D4FF',
    badges: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
  },
  {
    id: 'automation',
    title: 'Intelligent Process Automation',
    subtitle: 'Self-healing workflows & robotic efficiency',
    description: 'Automating statutory filings, document intelligence, reconciliation streams, and repetitive cross-system business workflows.',
    icon: 'Cpu',
    accent: '#1AA3E0',
    badges: ['Airflow', 'Prefect', 'RPA Engines', 'Webhooks', 'Async Workers', 'OCR / Vision AI']
  }
];

export const industriesData = [
  {
    id: 'fintech',
    title: 'Fintech & Payments',
    tagline: 'Velocity, fraud mitigation & algorithmic trust',
    description: 'Empowering digital wallets, neo-banks, and lending platforms with millisecond anomaly detection, alternative credit scoring, and automated compliance clearing.',
    icon: 'Coins',
    stats: 'Sub-15ms decisioning',
    solutions: ['Real-time fraud engines', 'Alternative credit scoring', 'Smart reconciliation']
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    tagline: 'Predictive clinical pathways & operational care',
    description: 'Unifying fragmented patient telemetry into HIPAA-compliant clinical decision support tools that improve patient outcomes and optimize bed utilization.',
    icon: 'HeartPulse',
    stats: '30%+ readmission drop',
    solutions: ['Early deterioration alerts', 'Clinical lakehouses', 'Resource scheduling']
  },
  {
    id: 'banking',
    title: 'Banking & Financial Institutions',
    tagline: 'Capital adequacy, AML & asset intelligence',
    description: 'Helping tier-1 banks stress-test risk exposures, automate statutory reporting, and combat financial crimes with vectorised mathematical simulation grids.',
    icon: 'Building2',
    stats: '99% simulation speedup',
    solutions: ['Basel III/IV capital engines', 'Automated AML triage', 'Customer LTV models']
  },
  {
    id: 'education',
    title: 'Higher Education & EdTech',
    tagline: 'Learner engagement telemetry & retention modeling',
    description: 'Equipping academic leadership with student journey telemetry, personalized retention alerts, and dynamic curriculum efficacy analytics.',
    icon: 'GraduationCap',
    stats: '40%+ retention gain',
    solutions: ['Early-warning dropout radar', 'Learning telemetry', 'Faculty resource allocation']
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover & Align',
    duration: 'Week 1-2',
    description: 'Deep-dive discovery with executive stakeholders to map domain friction points, audit existing data assets, and define quantitative success KPIs.',
    keyDeliverable: 'Architecture Blueprint & Strategic Horizon Document'
  },
  {
    step: '02',
    title: 'Design & Prototype',
    duration: 'Week 3-4',
    description: 'Synthesizing data models, designing user experience prototypes, and validating algorithm performance on sanitized historical datasets.',
    keyDeliverable: 'Interactive Proof of Concept (PoC) & Benchmark Report'
  },
  {
    step: '03',
    title: 'Deliver & Integrate',
    duration: 'Week 5-8',
    description: 'Engineering production-grade microservices, setting up resilient data pipelines, and integrating seamlessly into existing enterprise workflows.',
    keyDeliverable: 'Hardened Production Release & Automated CI/CD'
  },
  {
    step: '04',
    title: 'Dev & Continuous Support',
    duration: 'Ongoing',
    description: 'Continuous model drift monitoring, infrastructure scaling, proactive governance updates, and SLA-backed engineering support.',
    keyDeliverable: 'Observability Cockpit & 24/7 SLA Assurance'
  }
];

export const clientLogos = [
  { id: 1, name: 'Apex Capital [PLACEHOLDER]', sector: 'Fintech' },
  { id: 2, name: 'Novis Health [PLACEHOLDER]', sector: 'Healthcare' },
  { id: 3, name: 'Sterling Trust [PLACEHOLDER]', sector: 'Banking' },
  { id: 4, name: 'Vanguard Academy [PLACEHOLDER]', sector: 'EdTech' },
  { id: 5, name: 'OmniTrade Corp [PLACEHOLDER]', sector: 'Enterprise' },
  { id: 6, name: 'Zenith Logistics [PLACEHOLDER]', sector: 'Supply Chain' },
];

export const testimonialsData = [
  {
    id: 1,
    quote: '[PLACEHOLDER] vbrion demonstrated unprecedented foresight in solving our transaction risk challenges. Their analytics team built a streaming fraud model that paid for itself within the first quarter.',
    author: 'Elena Rostova',
    title: 'Chief Risk Officer [PLACEHOLDER]',
    company: 'Fintech Enterprise [PLACEHOLDER]',
    rating: 5,
  },
  {
    id: 2,
    quote: '[PLACEHOLDER] Combining legal governance consulting with machine learning engineering is rare. vbrion delivered our multi-jurisdiction compliance cockpit without missing a single regulatory milestone.',
    author: 'Rajiv Mehra',
    title: 'General Counsel & VP of Governance [PLACEHOLDER]',
    company: 'Global Conglomerate [PLACEHOLDER]',
    rating: 5,
  },
  {
    id: 3,
    quote: '[PLACEHOLDER] The predictive clinical pathway dashboards engineered by vbrion transformed our patient triage protocols. Outstanding technical rigor and domain empathy.',
    author: 'Dr. Sarah Jenkins',
    title: 'Director of Clinical Informatics [PLACEHOLDER]',
    company: 'Regional Hospital Network [PLACEHOLDER]',
    rating: 5,
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Sheik Amjath Basha',
    role: 'Founder & Director',
    bio: 'Guiding vbrion\'s strategic vision, enterprise expansion, and core delivery across cutting-edge IT consulting and digital transformation.',
    avatar: '/team/sheik-amjath-basha.jpg',
  },
  {
    id: 2,
    name: 'Chellammal G',
    role: 'Co-Founder & Director',
    bio: 'Driving institutional partnerships, operational governance, and organizational strategies that accelerate sustainable business growth.',
    avatar: '/team/chellammal-g.jpg',
  },
  {
    id: 3,
    name: 'Nesarajan PN',
    role: 'Software Development Head',
    bio: 'Overseeing technology architecture, engineering excellence, and agile execution to deliver mission-critical software solutions.',
    avatar: '/team/nesarajan-pn.png',
  },
  {
    id: 4,
    name: 'Prawin Kumar N',
    role: 'Software Development Engineer',
    bio: 'Specializing in resilient full-stack systems, clean code architecture, and performant product engineering across modern frameworks.',
    avatar: '/team/prawin-kumar-n.jpg',
  },
  {
    id: 5,
    name: 'Manoj Hariharan',
    role: 'Backend Developer',
    bio: 'Architecting high-concurrency microservices, robust database systems, secure APIs, and distributed cloud backends.',
    avatar: '/team/manoj-hariharan.jpg',
  },
  {
    id: 6,
    name: 'Kungumanithish K',
    role: 'Frontend Developer',
    bio: 'Engineering interactive, responsive, and pixel-perfect web interfaces with modern user experience principles and design systems.',
    avatar: '/team/kungumanithish-k.jpg',
  },
  {
    id: 7,
    name: 'Manoj A',
    role: 'AI Engineer',
    bio: 'Developing predictive intelligence models, advanced neural workflows, computer vision, and generative AI enterprise integrations.',
    avatar: '/team/manoj-a.jpg',
  }
];

export const ourPillars = teamMembers;

