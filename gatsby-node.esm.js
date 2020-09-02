const path = require(`path`);
import { formatDepartmentName } from './src/utils/formatDepartmentName';

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const eventsIndexTemplate = path.resolve(`src/templates/events-index.js`);
  const eventShowTemplate = path.resolve(`src/templates/event-show.js`);
  const villageShowTemplate = path.resolve(`src/templates/village-show.js`);
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
