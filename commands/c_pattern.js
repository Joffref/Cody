const command = require('./command')
//command patern for languages

module.exports = class pattern extends command
{

    static match (message){
       return message.content.startsWith('')
    }
    static action (message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('')
    }
}