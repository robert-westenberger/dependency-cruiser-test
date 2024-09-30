/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    exclude: {

    },
    doNotFollow: {
      path: ['node_modules']
    },
    enhancedResolveOptions: {
      exportsFields: ["exports"],
      conditionNames: ["import", "require", "node", "default", "types"],
      mainFields: ["main", "types", "typings"],
    },
    reporterOptions: {
      dot: {
        // collapsePattern: '^packages/([^/]+)/.*$',
        // collapsePattern: "^(node_modules/[^/]+)",
        collapsePattern: "^(node_modules/(@[^/]+/[^/]+|[^/]+))",
        // collapsePattern: 'node_modules/(?:@[^/]+/[^/]+|[^/]+)',
      },
      archi: {
        collapsePattern: "^(src/[^/]+|bin)",
      }
      // archi: {
      //   collapsePattern: '^packages/([^/]+)/.*$',
      // }
    }
  }
};
