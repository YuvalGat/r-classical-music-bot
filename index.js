const Discord = require('discord.js');

const config = require('./config');
const Command = require('./command');
const funcs = require('./funcs');

const client = new Discord.Client();
const commands = [
    new Command('test', funcs.test)
];

client.on('message', msg => {
    for (const command of commands) {
        if(msg.content.startsWith(`!${command.name}`)) {
            command.execute(msg);
        }
    }
});

client.login(config.token).then(console.log('Login successful'));
