const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login("NDQ4MTI3OTUyMTUyOTUyODQz.DeRocQ.bamze1-GjnN_-QQHRIv_YIsPHo8");
