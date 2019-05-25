//import from own commands
let Discord = require('discord.js');
//My commands 
let Python = require('./commands/python');
let Web = require('./commands/web')
let Ruby = require('./commands/ruby')
let Kotlin = require('./commands/kotlin')
//bot creation
const client = new Discord.Client();

//check start
client.on('ready', () => {

    console.log('I am ready!');

});

//New Member message
client.on('guildMemberAdd', member => {
    
    member.createDM().then( function (channel){
        channel.send('Bienvenue à toi' + member.displayName)
    });

});

//functions 'on message' from ./commands, can be improved..
client.on('message', message => {
   let command_used =  Python.parse(message) || Web.parse(message) || Ruby.parse(message) || Kotlin.parse(message)
});
  
//login 
client.login('Your token');
