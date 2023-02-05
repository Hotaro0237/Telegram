const Telegraf = require('telegraf').Telegraf;
const bot =  new Telegraf('5308047607:AAHekeBI9_MM0xTX3O8gOICM9MmUcTL16pU');

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