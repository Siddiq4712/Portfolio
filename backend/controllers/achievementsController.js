export const getAchievements = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      hackathons: [
        {
          event: 'NITS Hacks 8.0',
          institution: 'NIT Silchar',
          role: 'National Level Participant'
        }
      ],
      certifications: [
        'MongoDB Basics (MongoDB University)',
        'Responsive Web Design (FreeCodeCamp)',
        'Python Basics (Digilabs)',
        'Linux Unhatched (Cisco Academy)'
      ],
      experience: {
        role: 'Web Development Intern',
        company: 'Prodigy Infotech',
        duration: 'May 2025 — June 2025',
        impact: 'Reduced re-renders by 15% and integrated 10+ RESTful API endpoints.'
      }
    }
  });
};