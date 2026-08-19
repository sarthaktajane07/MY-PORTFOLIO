export const projects = [
  {
    id: 'coinzilla',
    title: 'CoinZilla — Cryptocurrency Analytics Platform',
    description: 'A cryptocurrency analytics platform for monitoring market prices, analyzing cryptocurrency performance, and tracking portfolio data through a centralized dashboard.',
    longDescription: 'CoinZilla is a comprehensive cryptocurrency analytics platform that allows users to monitor real-time market prices, track the performance of top cryptocurrencies, and manage portfolio metrics. Built with a responsive, modern UI, the application leverages external APIs to fetch live market data and renders interactive charts to visualize performance trends.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200&h=800&fit=crop'
    ],
    tech: ['React', 'JavaScript', 'API', 'CSS'],
    status: 'In Production',
    techDetails: [
      { name: 'React.js & Tailwind', description: 'Built a responsive, component-based dashboard interface.', icon: 'Layout' },
      { name: 'Data Visualization', description: 'Integrated Chart.js to render complex market data and trends.', icon: 'Activity' },
      { name: 'API Integration', description: 'Consumed third-party cryptocurrency APIs for real-time pricing.', icon: 'Server' }
    ],
    github: 'https://github.com/sarthaktajane07/Coinzilla-clone',
    live: '#',
    featured: true,
    category: 'Full Stack',
    duration: '2023 - Present',
    role: 'Frontend Architect',
    overview: 'CoinZilla was created to provide crypto enthusiasts with a clean, distraction-free environment to analyze market trends. The goal was to build a performant dashboard that handles high-frequency data updates gracefully.',
    problem: 'Cryptocurrency market data is fragmented across multiple exchanges, making it difficult for traders to monitor trends without juggling several complex browser tabs.',
    solution: 'Engineered a unified analytics platform that aggregates real-time price feeds into a singular, responsive dashboard with intuitive charting tools.',
    challenges: [
      'Handling high-frequency real-time data without causing UI lag.',
      'Structuring the dashboard layout to display dense financial data clearly on mobile devices.'
    ],
    technicalDecisions: [
      'Selected React with modular component architecture to isolate state re-renders to chart elements.',
      'Used REST API polling with request cancellation to minimize network overhead.'
    ],
    learned: [
      'Gained deep understanding of asynchronous data fetching and API rate-limiting strategies.',
      'Mastered dynamic canvas rendering for financial charts.'
    ],
    futureImprovements: [
      'Integrate WebSocket connections for sub-second real-time streaming updates.',
      'Add user authentication and personalized portfolio persistence.'
    ],
    solutions: [
      'Implemented optimized React state management and useMemo hooks to prevent unnecessary re-renders.',
      'Designed a responsive CSS Grid layout that reorganizes complex tables into expandable cards on small screens.'
    ],
    results: [
      { metric: 'Architecture', value: 'Component-Driven' },
      { metric: 'Data Flow', value: 'REST API' }
    ],
  },
  {
    id: 'dineflow',
    title: 'DineFlow — Restaurant Management System',
    description: 'A role-based restaurant table management system built with the MERN stack.',
    longDescription: 'DineFlow is a comprehensive restaurant management solution designed to streamline table reservations and order management. It features a role-based access control system for administrators, staff, and customers. The backend leverages Node.js and Express.js for robust API handling, while MongoDB ensures efficient data storage.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    status: 'Completed',
    techDetails: [
      { name: 'Node.js & Express', description: 'Built RESTful APIs to handle reservation logic and user management.', icon: 'Server' },
      { name: 'MongoDB', description: 'Used for storing user roles, table statuses, and booking history.', icon: 'Database' },
      { name: 'React.js', description: 'Created a dynamic and responsive UI for real-time table updates.', icon: 'Boxes' },
    ],
    github: 'https://github.com/sarthaktajane07/DineFlow',
    live: 'https://dineflowapp.vercel.app/',
    featured: true,
    category: 'Full Stack',
    duration: 'Academic Project',
    role: 'Full-Stack Developer',
    overview: 'DineFlow streamlines table reservations and staff coordination in modern dining environments.',
    problem: 'Manual table assignment and paper ordering cause delays during peak restaurant hours.',
    solution: 'Automated role-based reservation platform with real-time status updates.',
    challenges: [
      'Implementing secure role-based access control (RBAC).',
      'Managing real-time status updates for restaurant tables.',
    ],
    solutions: [
      'Designed a middleware-based permission system in Express.',
      'Optimized database queries for faster retrieval of table status.',
    ],
    results: [
      { metric: 'Architecture', value: 'MERN Stack' },
      { metric: 'Access Control', value: 'RBAC Middleware' },
    ],
  },
  {
    id: 'financial-fraud-detection',
    title: 'Financial Fraud Detection System',
    description: 'Logic-based system to analyze financial transactions and detect fraud patterns.',
    longDescription: 'This project focuses on the logical analysis of financial transaction data to identify potential fraud. By implementing logic based on Data Structures and Algorithms (such as hash maps and sorting), the system detects patterns like duplicate entries and abnormal transaction frequencies.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'DSA Algorithms'],
    status: 'Completed',
    techDetails: [
      { name: 'JavaScript', description: 'Implemented core fraud detection logic using arrays and hash maps.', icon: 'FileCode2' },
      { name: 'DSA Algorithm', description: 'Utilized sorting and searching to identify duplicate and irregular transactions.', icon: 'Brain' },
      { name: 'HTML/CSS', description: 'Built an interactive dashboard to display analysis results.', icon: 'Layout' },
    ],
    github: 'https://github.com/sarthaktajane07/Financial_fraud_Detecto',
    live: '#',
    featured: true,
    category: 'Algorithms',
    duration: 'Project',
    role: 'Developer',
    overview: 'A logical detection engine for identifying irregular transaction patterns.',
    problem: 'Unusual or duplicate transactions go unnoticed in high-volume logging systems.',
    solution: 'Developed hash-map lookup logic to flag anomalous transactions in O(1) time complexity.',
    challenges: [
      'Processing diverse transaction patterns efficiently.',
      'Visualizing complex data states in a user-friendly manner.',
    ],
    solutions: [
      'Applied hash maps for O(1) lookups of transaction IDs.',
      'Created a color-coded UI to distinguish between safe and flagged transactions.',
    ],
    results: [
      { metric: 'Lookup Time', value: 'O(1) Hash Map' },
      { metric: 'Pattern Match', value: 'Algorithmic' },
    ],
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
