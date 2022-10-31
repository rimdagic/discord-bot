require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
] 
});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('pong')
    }
    if (message.content === '!roll') {
        let dice = Math.floor(Math.random()*6)+1
        dice = dice.toString();
        message.reply(dice)
    }
})

client.login(process.env.TOKEN);