const command = require('./command')
//command patern for Kotlin

module.exports = class kotlin extends command
{

    static match (message){
       return message.content.startsWith('!kotlin')
    }
    static action (message){
        let args = message.content.split(' ')
        args.shift()
        message.reply('https://kotlinlang.org/docs/reference/kotlin-doc.html?q=' + args.join('%20') + '&p=0')
    }
}