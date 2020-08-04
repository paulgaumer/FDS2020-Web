const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const eventShowTemplate = path.resolve(`src/templates/event-show.js`);
  return graphql(
    `
      query EventsQuery {
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
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create event pages.
    result.data.allSanityEvent.edges.forEach((edge) => {
      // Format department's name for url
      const department = edge.node.department.name
        .toLowerCase()
        .replace(/ /g, '-');

      createPage({
        // Path for this page — required
        path: `/evenement/${department}/${edge.node.slug.current}`,
        component: eventShowTemplate,
        context: { eventId: edge.node.id },
      });
    });
  });
};
