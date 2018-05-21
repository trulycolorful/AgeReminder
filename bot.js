const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  message.reply(message.author);
  message.reply('The rules consist of\n\t✦16+ years of age.');
  if (message.author === 'Victoria#8844') {
    message.reply('The rules consist of\n\t✦16+ years of age.');
  }
});

client.login(process.env.BOT_TOKEN);
