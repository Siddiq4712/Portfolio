export const getEducation = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      university: {
        institution: 'National Engineering College',
        degree: 'BE Computer Science and Engineering',
        duration: '2023 — 2027',
        cgpa: '8.48',
        location: 'Kovilpatti, TN'
      },
      schooling: [
        {
          institution: 'St. John’s Hr. Sec. School',
          level: 'HSC',
          percentage: '90.16%',
          year: '2022 — 2023'
        },
        {
          institution: 'Meera Matriculation School',
          level: 'SSLC',
          year: '2021'
        }
      ]
    }
  });
};