export const getSkills = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      languages: ['Java', 'C++', 'JavaScript (ES6+)', 'SQL', 'C'],
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      tools: ['Git', 'GitHub', 'Postman', 'REST APIs', 'Linux'],
      coreCS: ['DSA', 'DBMS', 'Operating Systems']
    }
  });
};