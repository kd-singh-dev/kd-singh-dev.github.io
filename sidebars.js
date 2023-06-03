module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About me',
      collapsed: false,
      items: ['main/introduction'],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsed: false,
      items: [
        'projects/intro',
        {
          type: 'category',
          label: 'Full Stack',
          items: [
            'projects/getbus',
            'projects/docstream',
            'projects/sayhello',
            'projects/BondMantainer',
            'projects/travelbuddy',
            'projects/portfolio',
          ],
        },
        {
          type: 'category',
          label: 'Automations',
          items: ['projects/gitcli', 'projects/youtubeapi' ,'projects/instabot'],
        },
        
        'hackathons',
        'freelancing',
      ],
    },
    'achievements',
  ],
};
