const command = require('./command')
//command Ruby

module.exports = class ruby extends command
{

    static match (message){
       return message.content.startsWith('!ruby')
    }
    static action (message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://ruby-doc.com/search.html?cx=011815814100681837392%3Awnccv6st5qk&q=' + args.join('+') + '&sa=Search&cof=FORID%3A9')
    }
}