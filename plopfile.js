module.exports = function (plop) {
  plop.setGenerator("page", {
    prompts: [
      {
        type: "input",
        name: "pageName",
        message: "Qual nome da pagina?",
      },
      {
        type: "confirm",
        name: "createRoute",
        message: "Quer adicionar a rota dessa pagina?",
      },
    ],
    actions: function (data) {
      console.log("DATA=>", data);
      let actionsArray = [
        {
          type: "add",
          path: "src/pages/{{pascalCase pageName}}/index.js",
          templateFile: "plop-templates/page/index.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{pascalCase pageName}}/style.css",
          templateFile: "plop-templates/page/style.hbs",
        },
        {
          type: "append",
          pattern: "// EXPORT_PAGE",
          path: "src/pages/index.js",
          template: `export { default as {{pascalCase pageName}} } from "./{{pascalCase pageName}}";`,
        },
      ];

      const routersActions = [
        {
          type: "append",
          pattern: "{/* INJECT_ROUTE_PAGE */}",
          path: "src/routes.js",
          template: `\t\t\t\t<Route path="/{{kebabCase pageName}}" component={ {{pascalCase pageName}} } />`,
        },
        {
          type: "append",
          pattern: "// INJECT_IMPORT_PAGE",
          path: "src/routes.js",
          template: "\t{{pascalCase pageName}},",
        },
      ];

      if (data.createRoute) {
        routersActions.forEach((action) => actionsArray.push(action));
      }

      return actionsArray;
    },
  });
};
