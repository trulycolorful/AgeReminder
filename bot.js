const Discord = require('discord.js');
const client = new Discord.Client();

var messageCount = 0;

client.on('message', message => {
  if (message.author.tag === 'Victoria#8844'|| message.author.tag === 'Allanach7#9070' || message.author.tag === 'SquidgyToes#2560') {
    if(messageCount % 20 === 0) {
      message.reply('The rules consist of\n\t✦16+ years of age.');
    }
    messageCount++;
  }
});

client.login(process.env.BOT_TOKEN);
