// backend/controllers/identityController.js

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getIdentity = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      name: 'Mohamed Abubacker Siddiq H',
      role: 'Full Stack Developer',
      location: 'Tamil Nadu, India',
      contact: {
        email: 'siddiqabubacker148@gmail.com',
        phone: '+91 9080487163'
      },
      links: {
        github: 'https://github.com/Siddiq4712',
        linkedin: 'https://www.linkedin.com/in/mohamed-abubacker-siddiq-h-ab378428a2',
        leetcode: 'https://leetcode.com/u/Siddiq4712/'
      },
      resumeDownload: 'http://localhost:5000/api/v1/identity/resume'
    }
  });
};

// NEW: Function to handle the PDF download
export const downloadResume = (req, res) => {
  const filePath = path.join(
    __dirname,
    '../assets/Mohamed_Abubacker_Siddiq_Resume.pdf'
  );

  res.download(filePath, 'Mohamed_Abubacker_Siddiq_Resume.pdf', (err) => {
    if (err) {
      res.status(500).json({
        status: 'error',
        message: 'Could not download the resume. Ensure the file exists on the server.'
      });
    }
  });
};
