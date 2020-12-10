export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd1efe3fb50c9b840652807',
                  title: 'Sanity Studio',
                  name: 'hackathon-calendar-studio',
                  apiId: 'e7bf09d0-ec5b-42fb-bf42-ee3888006b81'
                },
                {
                  buildHookId: '5fd1efe31be6a8cb09fc49ed',
                  title: 'Portfolio Website',
                  name: 'hackathon-calendar',
                  apiId: '41d05e51-0803-4ca9-8273-f59ed1abc125'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josepholdfield/Hackathon-Calendar',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://hackathon-calendar.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
