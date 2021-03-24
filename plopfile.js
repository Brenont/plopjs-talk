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
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/index.js",
        templateFile: "plop-templates/page/index.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/style.js",
        templateFile: "plop-templates/page/style.hbs",
      },
    ],
  });
};
