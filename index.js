const Telegraf = require('telegraf').Telegraf;
const bot =  new Telegraf('5383319279:AAHozd2gIDj3ql2ZH2GVxVHCq2No_WWoIpo');
// const axios = require('axios');
const helpMsg = `
Say something to me 
/start - Start the bot
/help - command reference
/echo - repeat yourself
/ping - Pong!
/character - list of viewable character list
`;

bot.start((ctx) => {
    ctx.reply('Hi I am Hotaro ;)');
    ctx.reply(helpMsg);
});

bot.help((ctx) => {
    ctx.reply(helpMsg);
});

bot.command("character", (ctx)=>{
    const list = `/Houtarou, /Chitanda, /Ibara, /Fukube`
    ctx.reply(list)
})

bot.command("ping",(ctx)=>{
    ctx.reply("Pong!")
})

bot.command("echo", (ctx) =>{
    let input = ctx.message.text;
    let inputArray = input.split(" ");
    // console.log(inputArray);
    let message = " "

    if (inputArray.length == 1) {
        message = "You said echo"
    } else {
        inputArray.shift()
        message = inputArray.join(" ")
    }

    ctx.reply(message)
})

bot.command("Houtarou", (ctx) =>{
    ctx.replyWithPhoto("https://static.wikia.nocookie.net/hyouka/images/9/98/Houtarou_Oreki.jpg/revision/latest?cb=20200301040149")
    ctx.reply("Houtarou Oreki (折木 奉太郎 Oreki Hōtarō) is the protagonist of Classic Literature Club series and Hyouka. He is a student of Kamiyama High School, and a member of the school's Classic Lit Club. Houtarou is an apathetic person who prioritizes energy conservation above all else. However, he possesses brilliant deduction skills, and he is often forced to use them by the ever-curious Eru Chitanda.")
})

bot.command("Chitanda", (ctx) => {
    ctx.replyWithPhoto("https://static.wikia.nocookie.net/hyouka/images/c/c2/Eru_chitanda_1.jpg/revision/latest?cb=20171030201740")
    ctx.reply("Eru Chitanda (千反田 える Chitanda Eru) is a main character of Classic Literature Club series and Hyouka. She is a student at Kamiyama High School and the president of the Classical Literature Club where it is usually her who is responsible for getting the club involved with solving various mysteries.")
})

bot.command("Ibara", (ctx)=>{
    ctx.replyWithPhoto("https://static.wikia.nocookie.net/hyouka/images/5/54/Mayaka_Ibara.jpg/revision/latest?cb=20210204102417")
    ctx.reply("Mayaka Ibara (伊原 摩耶花 Ibara Mayaka) is one of the main characters of Classic Literature Club series and Hyouka. She is a student of the Kamiyama High School belonging to class 2-C (1-? earlier), a volunteer librarian in the school library and a member of both school's Classic Lit Club and Manga Club.")
})

bot.command("Fukube", (ctx)=>{
    ctx.replyWithPhoto("https://static.wikia.nocookie.net/hyouka/images/f/f0/Satoshi_Fukube.jpg/revision/latest?cb=20210204102505")
    ctx.reply("Satoshi Fukube (福部 里志 Fukube Satoshi) is a main character of Classic Literature Club series and Hyouka. He is a student of the Kamiyama High School belonging to class 2-D (1-D earlier) and a friend of Houtarou Oreki. He is a member of the school's Classic Literature Club, Handicraft Club and Executive Committee. Satoshi possesses a fantastic memory, but doesn't excel in drawing conclusions therefrom.")
})
bot.launch();