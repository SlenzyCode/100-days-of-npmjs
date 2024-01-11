const { Hercai } = require("hercai");
const herc = new Hercai();

const messages = {
    "hello": 'Hello, how old are you?',
    "15": 'Very good, how are you?'
};

async function gpt(question) {
    return new Promise(async (resolve, reject) => {
        const message = messages[question.toLowerCase()];
        if (!question) {
            return console.log("Please, enter a question");
        };
        if (message) {
            resolve(message);
        } else {
            try {
                await herc.question({ model: 'gemini', content: question }).then((result) => {
                    resolve(result.reply
                        .replaceAll("Google", 'SlenzyCode')
                        .replaceAll("Herc.ai", 'Slenzy.ai')
                        .replaceAll("Herc.ai,", 'Slenzy.ai')
                        .replaceAll("Hercai", 'Slenzy.ai')
                        .replaceAll("Hercai,", 'Slenzy.ai')
                        .replaceAll("Herc Corp", 'Slenzy')
                    );
                });
            } catch (error) {
                console.error(error);
                reject(error);
            };
        };
    });
};

module.exports = {
    gpt
};