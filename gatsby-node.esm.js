const path = require(`path`);
import { formatDepartmentName } from './src/utils/formatDepartmentName';

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const eventsIndexTemplate = path.resolve(`src/templates/events-index.js`);
  const eventShowTemplate = path.resolve(`src/templates/event-show.js`);
  const onlineEventShowTemplate = path.resolve(
    `src/templates/onlineEvent-show.js`
  );
  const villageShowTemplate = path.resolve(`src/templates/village-show.js`);
  const quiz2021QuestionTemplate = path.resolve(
    `src/templates/quiz2021-question.js`
  );
  return graphql(
    `
      {
        allSanityDepartment {
          edges {
            node {
              id
              name
            }
          }
        }
        allSanityEvent {
          edges {
            node {
              id
              title
              _createdAt
              slug {
                current
              }
              department {
                name
              }
            }
          }
        }
        allSanityOnlineEvent {
          edges {
            node {
              id
              title
              _createdAt
              slug {
                current
              }
            }
          }
        }
        allSanityVillage {
          edges {
            node {
              id
              department {
                name
              }
              slug {
                current
              }
            }
          }
        }
        sanityQuiz2021 {
          _rawQuestions
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // CREATE INDIVIDUAL DEPARTMENT PAGES
    result.data.allSanityDepartment.edges.forEach((edge) => {
      // Format department's name for url
      const department = formatDepartmentName(edge.node.name);

      createPage({
        path: `/${department}`,
        component: eventsIndexTemplate,
        context: { departmentId: edge.node.id, departmentName: edge.node.name },
      });
    });

    // CREATE INDIVIDUAL EVENT PAGES
    result.data.allSanityEvent.edges.forEach((edge) => {
      // Format department's name for url
      const department = formatDepartmentName(edge.node.department.name);

      createPage({
        path: `/${department}/${edge.node.slug.current}`,
        component: eventShowTemplate,
        context: { eventId: edge.node.id },
      });
    });

    // CREATE INDIVIDUAL ONLINE EVENT PAGES
    result.data.allSanityOnlineEvent.edges.forEach((edge) => {
      createPage({
        path: `/multimedia/${edge.node.slug.current}`,
        component: onlineEventShowTemplate,
        context: { eventId: edge.node.id },
      });
    });

    // CREATE INDIVIDUAL VILLAGE PAGES
    result.data.allSanityVillage.edges.forEach((edge) => {
      // Format department's name for url
      const department = formatDepartmentName(edge.node.department.name);

      createPage({
        path: `/${department}/${edge.node.slug.current}`,
        component: villageShowTemplate,
        context: { villageId: edge.node.id },
      });
    });

    // CREATE INDIVIDUAL QUIZ 2021 QUESTION PAGES
    result.data.sanityQuiz2021._rawQuestions.forEach((question, i) => {
      createPage({
        path: `/quiz-21/${i + 1}`,
        component: quiz2021QuestionTemplate,
        context: {
          questionKey: question._key,
          questionNumber: i + 1,
        },
      });
    });
  });
};

// ***************************
// Needed for Mapbox in Gatbsy
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
