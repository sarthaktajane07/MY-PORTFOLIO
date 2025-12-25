export const projects = [
  {
    id: 'dineflow',
    title: 'DineFlow - Restaurant System',
    description: 'A role-based restaurant table management system built with the MERN stack.',
    longDescription: 'DineFlow is a comprehensive restaurant management solution designed to streamline table reservations and order management. It features a role-based access control system for administrators, staff, and customers. The backend leverages Node.js and Express.js for robust API handling, while MongoDB ensures efficient data storage. The responsive React frontend provides a seamless user experience for managing dining logistics.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
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
      { metric: 'Status', value: 'Completed' },
    ],
  },
  {
    id: 'financial-fraud-detection',
    title: 'Financial Fraud Detection',
    description: 'Logic-based system to analyze transactions and detect fraud patterns.',
    longDescription: 'This project focuses on the logical analysis of financial transaction data to identify potential fraud. By implementing logic based on Data Structures and Algorithms (such as hash maps and sorting), the system detects patterns like duplicate entries and abnormal transaction frequencies. It features an interactive UI aimed at visualizing transaction statuses and flagging suspicious activities efficiently.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'DSA'],
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
    challenges: [
      'Processing diverse transaction patterns efficiently.',
      'Visualizing complex data states in a user-friendly manner.',
    ],
    solutions: [
      'Applied hash maps for O(1) lookups of transaction IDs.',
      'Created a color-coded UI to distinguish between safe and flagged transactions.',
    ],
    results: [
      { metric: 'Accuracy', value: 'High' },
      { metric: 'Logic', value: 'Optimized' },
    ],
  },
  {
    id: 'student-gallery',
    title: 'Student Fun Moments Gallery',
    description: 'A responsive multi-page gallery website for capturing student memories.',
    longDescription: 'A visually engaging gallery project designed to store and display memorable moments. It features a responsive layout that adapts to various screen sizes, ensuring a great viewing experience on both mobile and desktop. The project utilizes event-based navigation and clean DOM manipulation to create an immersive photo browsing experience.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    techDetails: [
      { name: 'HTML5/CSS3', description: 'Structured the gallery grid and applied responsive styling.', icon: 'Layout' },
      { name: 'JavaScript', description: 'Handled image events and navigation logic.', icon: 'FileCode2' },
    ],
    github: 'https://github.com/sarthaktajane07/-Student-Fun-Moments-Gallery',
    live: 'https://sarthaktajane.netlify.app/',
    featured: true,
    category: 'Frontend',
    duration: 'Web Project',
    role: 'Frontend Developer',
    challenges: [
      'Maintaining layout integrity across different device sizes.',
      'Optimizing image loading for smoother navigation.',
    ],
    solutions: [
      'Used CSS Flexbox and Grid for adaptive layouts.',
      'Implemented lazy loading for images.',
    ],
    results: [
      { metric: 'Design', value: 'Responsive' },
      { metric: 'UX', value: 'Smooth' },
    ],
  },
  {
    id: 'coinzilla',
    title: 'Coinzilla - Crypto UI',
    description: 'A modern UI prototype inspired by crypto trading platforms.',
    longDescription: 'Coinzilla is a frontend prototype that mimics the dashboard of a cryptocurrency trading platform. It focuses on modern UI patterns, featuring a dark-themed dashboard layout for tracking crypto assets and displaying advertisements. The project emphasizes responsive design principles and clean component structure.',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop',
    screenshots: [],
    tech: ['React.js', 'CSS3', 'UI Design'],
    techDetails: [
      { name: 'React.js', description: 'Built reusable UI components for the dashboard.', icon: 'Boxes' },
      { name: 'CSS3', description: 'Styled the application with a modern dark theme.', icon: 'Palette' },
    ],
    github: 'https://github.com/sarthaktajane07/Coinzilla-clone',
    live: '#',
    featured: false,
    category: 'Prototype',
    duration: 'Prototype',
    role: 'UI Developer',
    challenges: [
      'Designing a complex dashboard interface from scratch.',
    ],
    solutions: [
      'Broke down the UI into modular React components.',
    ],
    results: [
      { metric: 'UI', value: 'Modern' },
    ],
  },
  {
    id: 'calculator',
    title: 'Calculator Web App',
    description: 'A functional calculator with memory and advanced operations.',
    longDescription: 'A web-based calculator application that supports standard arithmetic as well as memory functions. It focuses on clean UI design and usability, demonstrating core JavaScript skills such as event handling, DOM manipulation, and logic implementation for mathematical operations.',
    image: '/images/calculator.png',
    screenshots: [
      '/images/calculator.png',
    ],
    tech: ['JavaScript', 'HTML', 'DOM Manipulation'],
    techDetails: [
      { name: 'JavaScript', description: 'Implemented all calculation logic.', icon: 'FileCode2' },
    ],
    github: 'https://github.com/sarthaktajane07/My-calculator',
    live: '#',
    featured: false,
    category: 'Utility',
    duration: 'Practice',
    role: 'Developer',
    challenges: [],
    solutions: [],
    results: [],
  },
];

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};
