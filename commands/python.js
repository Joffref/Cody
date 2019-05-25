const command = require('./command')
//python DOC search

module.exports = class python extends command
{

    static match (message){
       return message.content.startsWith('!python')
    }
    static action (message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://docs.python.org/fr/3/search.html?q=' + args.join('+'))
    }
}