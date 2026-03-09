// backend/controllers/identityController.js

import path from 'path';
import { fileURLToPath } from 'url';
import Profile from '../models/Profile.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const getIdentity = async (req, res) => {
  try {
    const profile = await Profile.findOne().select('-id -__v'); // Exclude Unique ID and version fields
    if (!profile) {
      return res.status(404).json({
        status : 'error',
        message : 'Profile not found'
      });
    }

    const orderedResponse = {
      name: profile.name,
      role: profile.role,
      location: profile.location,
      bio: profile.bio,
      contact: profile.contact,
      socials: profile.socials,
    };

    res.status(200).json({
      status : 'success',
      data : orderedResponse,
    })
  } catch (error) {
    res.status(500).json({status : 'error', message : error.message});
  }
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
