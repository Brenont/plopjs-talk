module.exports = {
  description: "Crie uma pagina e adiciona sua rota",
  prompts: [
    {
      type: "input",
      name: "pageName",
      message: "Qual será o nome da sua pagina?",
    },
    {
      type: "confirm",
      name: "hasStyle",
      message: "Você quer gerar o arquivo de estilo?",
    },
  ],
  actions: function (data) {
    let actions = [
      // criando arquivo index.js da pagina
      {
        type: "add",
        path: "src/pages/{{pascalCase pageName}}/index.js",
        templateFile: "plop-templates/page/index.hbs",
      },
      // injetando exportação em pages/index.js
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_PAGE_EXPORT */`,
        template: `export { default as {{pascalCase pageName}} } from "./{{pascalCase pageName}}"`,
      },

      // injetando importação da pagina em routes.js
      {
        type: "append",
        path: "src/routes.js",
        pattern: `/* PLOP_ROUTE_IMPORT */`,
        template: `\t{{pascalCase pageName}},`,
      },
      // injetando route da pagina em routes.js
      {
        type: "append",
        path: "src/routes.js",
        pattern: `{/* PLOP_INJECT_ROUTE */}`,
        template: `\t\t\t\t<Route exact path="/{{dashCase pageName}}" component={ {{pascalCase pageName}} } />`,
      },
    ];

    if (data.hasStyle) {
      // criando arquivo styles.js da pagina
      actions.push({
        type: "add",
        path: "src/pages/{{pascalCase pageName}}/styles.js",
        templateFile: "plop-templates/page/styles.hbs",
      });
    }

    return actions;
  },
};
