export const getProblemSolvingStats = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      totalSolved: 2600,
      breakdown: [
        { platform: 'Skillrack', solved: '2000+' },
        { platform: 'LeetCode', solved: '450+', rating: '1548' },
        { platform: 'GeeksforGeeks', solved: '150+' }
      ],
      coreStrengths: [
        'Data Structures & Algorithms',
        'Competitive Programming',
        'Database Management Systems',
        'Operating Systems'
      ]
    }
  });
};