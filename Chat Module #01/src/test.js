const app = require("./app");

const question = "Hello";

app.gpt(question).then((result) => {
    console.log(result);
});