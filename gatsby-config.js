module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `http://faiyazrafeek.me/`,
    // Your Name
    name: 'Faiyaz Ahamed',
    // Main Site Title
    title: `Faiyaz Rafeek | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Full-Stack Engineer | AI/ML Enthusiast | Designer | Instructor | Volunteer`,
    // Optional: Twitter account handle
    author: `@faiyaz_rafeek`,
    // Optional: Github account URL
    github: `https://github.com/faiyazrafeek`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/faiyaz-rafeek/`,
    // Optional: CV Link
    mycv: `https://drive.google.com/file/d/1IOfK8tdT0NxpYhuBGUGEyWlaLuwXjuIW/view?usp=sharing`,
    // Content of the About Me section
    about: `Highly confident and self-motivated individual with a deep passion for technology, who finds every opportunity to work with people and achieve the maximum; seeking a rewarding and challanging opportunity to step into the corporate world.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'CAL - EDUWIDE | Group | 2020',
        description:
          'Currently developing a Computer Assistant Learning system for EDUWIDE Academy. Technologies : React, Redux, Node.js, Express, MongoDB (MERN Stack) ',
        link: 'https://github.com/faiyazrafeek',
      },
      {
        name: 'MentorX | Individual | 2020  ',
        description:
          'Currently developing a cross platform digital library for students to download study materials. Technologies : React, Redux, Node.js, Firebase, React Native',
        link: 'https://mentorx.netlify.app/',
      },
      {
        name: 'Inventory Management System | Group | 2019',
        description:
          'Contributed to develop an inventroy management system (Web & Dekstop) for the proposed physics laboratory of the Faculty of Computing and Technology, University of Kelaniya. Technologies : Java, JavaFX, PHP, Ajax, jQuery, MySQL, HTML, CSS, Javascript, Bootstrap',
        link: 'https://github.com/faiyazrafeek',
      },
      {
        name: 'Hotel Management System | Group | 2018',
        description:
          'Contributed to develop a hotel management system for Sea Breeze Restaurant and Hotel. Technologies : Java, JSP, Servlet, MySQL',
        link: 'https://github.com/faiyazrafeek',
      },
      
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Instructor | EDUWIDE Academy',
        description: 'EDUWIDE Academy is an Educational Institute organized for the purpose of the educational development.',
        link: 'http://eduwide.lk',
      },
      {
        name: 'Full-Stack Developer | MentorX',
        description: 'MentorX is a digital library which provides academic study materials for all grades.',
        link: 'https://mentorx.netlify.app/',
      },
      {
        name: 'UI/UX Designer | FA Design',
        description: 'FA Design is an design oriented startup which provides designing services including Web Design, UI/UX Design, Graphic Design. Currently act as a UI/UX Designer.',
        link: 'http://fadesign.lk',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, JavaScript (ES6+), Python, PHP, C, C#, HTML, CSS, SQL',
      },
      {
        name: 'Frameworks and Libraries',
        description: 'React, Node.js, Express, Spring, .NET, Laravel, Angular, jQuery, Bootstrap, Next JS, Wordpress',
      },
      {
        name: 'Databases, Cloud, others',
        description:
          'MySQL, MongoDB, Postgre SQL, Firebase, AWS Cloud, Git',
      },
      {
        name: 'Design Tools',
        description:
          'Photoshop, Illustrator, InDesign, Adobe XD, Figma',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
