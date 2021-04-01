module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "Crie uma pagina e adiciona sua rota",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual será o nome da sua pagina?",
      },
    ],
    actions: [
      // criando arquivo index.js da pagina
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/page/index.hbs",
      },
      // injetando exportação em pages/index.js
      {
        type: "append",
        path: "src/pages/index.js",
        pattern: `/* PLOP_PAGE_EXPORT */`,
        template: `export { default as {{pascalCase name}} } from "./{{pascalCase name}}"`,
      },
      // criando arquivo styles.js da pagina
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/styles.js",
        templateFile: "plop-templates/page/styles.hbs",
      },
      // injetando importação da pagina em routes.js
      {
        type: "append",
        path: "src/routes.js",
        pattern: `/* PLOP_ROUTE_IMPORT */`,
        template: `\t{{pascalCase name}},`,
      },
      // injetando route da pagina em routes.js
      {
        type: "append",
        path: "src/routes.js",
        pattern: `{/* PLOP_INJECT_ROUTE */}`,
        template: `\t\t\t\t<Route exact path="/{{dashCase name}}" component={ {{pascalCase name}} } />`,
      },
    ],
  });
};
