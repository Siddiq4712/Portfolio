import Skills from '../models/Skill.js';

export const getSkills = async (req, res) => {
  try {
    const groupedSkills = await Skills.aggregate([
      {
        $group: {
          _id: '$category',           // Group by the category field
          skills: { $push: "$name" }, // Create an array of names
          count: { $sum: 1 }          // Count items in this category
        }
      },
      {
        $project: {
          _id: 0,                     // Hide the default _id
          category: "$_id",           // Rename _id to category
          skills: 1,                  // Keep the skills array
          count: 1                    // Keep the count
        }
      },
    ]);

    if (!groupedSkills || groupedSkills.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: "No skills found in the database"
      });
    }

    const orderedData = groupedSkills.map(item => ({
      category : item.category,
      skills : item.skills,
      count : item.count
    }))

    return res.status(200).json({
      status: 'success',
      data: orderedData,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};