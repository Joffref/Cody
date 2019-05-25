const command = require('./command')
//HTML, JS and CSS DOC search

module.exports = class web extends command
{

    static match (message){
       return message.content.startsWith('!web')
    }
    static action (message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://developer.mozilla.org/fr/search?q=' + args.join('+'))
    }
}

