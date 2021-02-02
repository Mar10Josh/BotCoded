const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'Gacha ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'Gacha invite') {
    msg.reply('Invite me at https://discord.com/oauth2/authorize?client_id=795836685324779550&permissions=2079780471&scope=bot!');
  }
  if (msg.content === 'Fuck') {
    msg.reply('DO NOT SWEAR!');
  }
});

client.login('Nzk1ODM2Njg1MzI0Nzc5NTUw.X_PKqw.V9eoVCZAdKdzdpJQK2StBghl4Gs');