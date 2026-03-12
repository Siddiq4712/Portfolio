import Project from '../models/Project.js'

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('stack', 'name -_id');

    const formattedProjects = projects.map(project => ({
      title: project.title,
      stack: project.stack.map(skill => skill.name),
      highlights: project.highlights,
      githubLink: project.githubLink,
      liveLink: project.liveLink,
      order: project.order
    }));

    if (!projects || projects.length === 0) {
      return res.status(404).json({
        status : 'error',
        message : 'No projects found in the database'
      });
    }

      res.status(200).json({
        status : 'success',
        data : formattedProjects,
      })
  } catch (error) {
   res.status(500).json({
    status : 'error',
    message : error.message,
   }) 
  }
};