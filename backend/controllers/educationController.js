import Education from '../models/Education.js';

export const getEducation = async (req, res) => {
  try {
    const educationData = await Education.find().select('-_id -__v');

    if (!educationData || educationData.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No education data found'
      }); 
    }

    res.status(200).json({
      status : 'success',
      data : educationData
    })
  } catch (error) {
    res.status(500).json({message : 'error fetching education data', error: error.message});
  }
}