import ProblemSolving from "../models/ProblemSolving.js";

export const getProblemSolvingStats = async (req, res) => {
  try {
    const stats = await ProblemSolving.find().select('-_id -__v');

    if (!stats || stats.elngth === 0) {
      return res.status(404).json({
        status : 'error',
        message : "No data Found",
      });
    }

    res.status(200).json({
      status : 'success',
      data : stats,
    })
  } catch(error) {
    res.status(500).json({
      status : 'error',
      message : error.message,
    })
  }
}