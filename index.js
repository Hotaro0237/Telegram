const Telegraf = require('telegraf');
const bot =  new Telegraf('5308047607:AAHekeBI9_MM0xTX308g0ICM9MmUcTL16pu');

const helpMsg = `
Say something to me 
/start - Start the bot
/help - command reference
`;

bot.start((ctx) => {
    ctx.reply('Hi I am Hotaro ;)');
    ctx.reply(helpMsg);
});

bot.help((ctx) => {
    ctx.reply(helpMsg);
});


bot.launch();