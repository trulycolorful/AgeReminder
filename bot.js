const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.author.tag === 'Allanach7#9070' || message.author.tag === 'SquidgyToes#2560') {
      message.react('👶');
  }
});

client.login(process.env.BOT_TOKEN);
