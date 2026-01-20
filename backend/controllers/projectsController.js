export const getProjects = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: [
      {
        title: 'Product Lifecycle Action System',
        stack: ['Node.js', 'MongoDB', 'JWT', 'RBAC'],
        highlights: [
          'Architected a tracking platform to manage asset ownership and audit trails.',
          'Implemented JWT-based authentication and Role-Based Access Control for security.'
        ],
        link: 'https://github.com/Siddiq4712/MCP.git'
      },
      {
        title: 'Online Food Ordering System',
        stack: ['MERN Stack', 'Real-time updates'],
        highlights: [
          'Built a real-time ordering flow with dynamic menu rendering.',
          'Optimized MongoDB schema to handle concurrent user requests.'
        ],
        link: 'https://github.com/Siddiq4712/Project.git'
      },
      {
        title: 'Hostel Inventory Management System',
        stack: ['React', 'Modular Components'],
        highlights: [
          'Engineered a scalable dashboard for asset tracking and maintenance.',
          'Implemented client-side filtering and search for resource efficiency.'
        ],
        link: 'https://github.com/Siddiq4712/hsotel-management-mern.git'
      }
    ]
  });
};