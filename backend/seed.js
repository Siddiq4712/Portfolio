import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import Profile from './models/Profile.js';
import Skill from './models/Skill.js';
import Project from './models/Project.js';
import Education from './models/Education.js';
import Achievement from './models/Achievement.js';
import ProblemSolving from './models/ProblemSolving.js';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // 1. CLEAR EXISTING DATA (Prevent duplicates)
    console.log('🧹 Clearing old data...');
    await Promise.all([
      Profile.deleteMany(),
      Skill.deleteMany(),
      Project.deleteMany(),
      Education.deleteMany(),
      Achievement.deleteMany(),
      ProblemSolving.deleteMany()
    ]);

    // 2. SEED PROFILE
    console.log('👤 Seeding Profile...');
    await Profile.create({
      name: 'Mohamed Abubacker Siddiq H',
      role: 'Full Stack Developer | MERN Specialist',
      location: 'Tamil Nadu, India',
      contact: { email: 'siddiqabubacker148@gmail.com', phone: '+91 9080487163' },
      socials: {
        github: 'https://github.com/Siddiq4712',
        linkedin: 'https://www.linkedin.com/in/mohamed-abubacker-siddiq-h-ab378428a2',
        leetcode: 'https://leetcode.com/u/Siddiq4712/'
      },
      bio: 'Computer Science student focused on MERN architecture and competitive programming.'
    });

    // 3. SEED SKILLS (And capture IDs for projects)
    console.log('🛠️ Seeding Skills...');
    const skillList = [
      { name: 'Java', category: 'Language' },
      { name: 'Node.js', category: 'Stack' },
      { name: 'MongoDB', category: 'Stack' },
      { name: 'React.js', category: 'Stack' },
      { name: 'Express.js', category: 'Stack' },
      { name: 'JavaScript', category: 'Language' },
      { name: 'SQL', category: 'Language' },
      { name: 'DSA', category: 'Core Cs' },
      {name : "Git", category : "Tool"},
      {name : "Linux", category : "Tool"}
    ];
    const createdSkills = await Skill.insertMany(skillList);
    
    // Helper function to find a skill ID by name
    const getSkillId = (name) => createdSkills.find(s => s.name === name)._id;

    // 4. SEED PROJECTS (Linking to Skill IDs)
    console.log('🚀 Seeding Projects...');
    await Project.insertMany([
      {
        title: 'Hostel Inventory Management System',
        stack: [getSkillId('Node.js'), getSkillId('React.js'), getSkillId('Express.js'), getSkillId('SQL')],
        highlights: [
            'Engineered a scalable dashboard for asset tracking and maintenance.', 
            'Implemented client-side filtering and search for resource efficiency.'
        ],
        githubLink: 'https://github.com/Siddiq4712/hsotel-management-mern.git',
        liveLink: 'https://nec.edu.in/hostelerp/'
      },
      {
        title: 'Online Food Ordering System',
        stack: [getSkillId('Java')],
        highlights: ['Real-time ordering flow', 'Optimized MongoDB schema'],
        githubLink: 'https://github.com/Siddiq4712/Project.git'
      },

      {
        title : "Tree Management System",
        stack : [getSkillId('Node.js'), getSkillId('React.js'), getSkillId('Express.js'), getSkillId('SQL')],
        highlights : [
          'Designed a dynamic dashboard for real-time tree monitoring and maintenance scheduling.',
          'This helps users to easily track tree health and growth, ensuring efficient care and management.',
        ],
        githubLink : 'https://github.com/Siddiq4712/TreeProject.git'
      }
    ]);

    // 5. SEED EDUCATION
    console.log('🎓 Seeding Education...');
    await Education.insertMany([
      { institution: 'National Engineering College', degree: 'BE Computer Science', duration: '2023 — 2027', cgpa: '8.4', level: 'University' },
      { institution: 'St. John’s Hr. Sec. School', level: 'HSC', percentage: '90.17%', duration: '2022 — 2023' },
      { institution : "Meera matriculation school", level : "SSLC", percentage : "PASS", duration : "2020 - 2021", location : "Arampanni Thoothukudi"},
    ]);

    // 6. SEED ACHIEVEMENTS
    console.log('🏆 Seeding Achievements...');
    await Achievement.insertMany([
      { type: 'Internship', title: 'Web Development Intern', organization: 'Prodigy Infotech', role: 'Intern', description: 'Reduced re-renders by 15%' },
      { type: 'Hackathon', title: 'NITS Hacks 8.0', organization: 'NIT Silchar', role: 'National Participant' },
      { type: "Certification", title: "MongoDB Basics (MongoDB University)" },
      { type: "Certification", title: "Responsive Web Design (FreeCodeCamp)" },
      { type: "Certification", title: "Python Basics (Digilabs)" },
      { type: "Certification", title: "Linux Unhatched (Cisco Academy)" }
    ]);

    // 7. SEED PROBLEM SOLVING
    console.log('🧩 Seeding Stats...');
    await ProblemSolving.insertMany([
      { platform: 'Skillrack', solvedCount: 2000 },
      { platform: 'LeetCode', solvedCount: 500, rating: '1548' },
      { platform: 'GeeksforGeeks', solvedCount: 200 }
    ]);

    console.log('✅ Database Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error Seeding Data:', error);
    process.exit(1);
  }
};

seedData();