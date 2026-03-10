import Skills from '../models/Skill.js';

export const getSkills = async (req, res) => {
  try {
    const groupedSkillsByCategory = await Skills.aggregate([
      {
        $group : {
          _id : '$category',
          skills : {$push : "$name"},
          count : {$sum : 1}
        }
      }
    ])
    if (!groupedSkillsByCategory || !groupedSkillsByCategory.length === 0) {
      return res.status(404).json({
        status : 'error',
        message : "Skills not found"
      })
    }


    res.status(200).json({
      status : 'success',
      data : groupedSkillsByCategory,
    })
  } catch (error) {
    res.status(500).json({status : 'error', message : error.message});
  }
}



// export const getSkills = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: {
//       languages: ['Java', 'C++', 'JavaScript (ES6+)', 'SQL', 'C'],
//       stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
//       tools: ['Git', 'GitHub', 'Postman', 'REST APIs', 'Linux'],
//       coreCS: ['DSA', 'DBMS', 'Operating Systems']
//     }
//   });
// };