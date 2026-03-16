import Achievement from '../models/Achievement.js';

export const getAchievements = async (req, res) => {
  try {

    const achievements = await Achievement.find();

    const result = {
      hackathons: [],
      certifications: [],
      experience: null
    };

    achievements.forEach(item => {

      if (item.type === 'Hackathon') {
        result.hackathons.push({
          event: item.title,
          institution: item.organization,
          role: item.role
        });
      }

      if (item.type === 'Certification') {
        result.certifications.push(item.title);
      }

      if (item.type === 'Internship') {
        result.experience = {
          role: item.title,
          company: item.organization,
          duration: item.date,
          impact: item.description
        };
      }

    });

    res.status(200).json({
      status: "success",
      data: result
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
};