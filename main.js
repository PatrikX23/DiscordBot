const Discord = require('discord.js');

const bot = new Discord.Client();

require("./ExtendedMessage");

const prefix = '!m';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.once('ready', () => {
    console.log('Bot elérhető!');
    bot.user.setActivity('Valamivel', { type: 'PLAYING' })
});


bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.length === prefix.length) return;

    if(message.channel.id === '847906535853916192' || message.channel.id === '846839889991303208' || message.channel.id === '846408066224226364'){ //konfig, bot-config, bot-spam
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase();
    
        if (command === 'contacts'){
            //if(message.member.roles.cache.some(r => r.name === 'Helper') || message.member.roles.cache.some(r => r.name === 'Moderátor') || message.member.roles.cache.some(r => r.name === 'Admin') || message.member.roles.cache.some(r => r.name === 'Fejlesztő') || message.member.roles.cache.some(r => r.name === 'Tulajdonos') || message.member.roles.cache.some(r => r.name === 'Csapatvezető') || message.member.roles.cache.some(r => r.name === 'Discord Konfig')){
            message.delete()
            .then(msg => console.log(`Deleted Command message from ${msg.author.username}`))
            .catch(console.error);
    
            bot.commands.get('contacts').execute(message, args);
            //}
        }    

        if (command === 'help'){
            //if(message.member.roles.cache.some(r => r.name === 'Helper') || message.member.roles.cache.some(r => r.name === 'Moderátor') || message.member.roles.cache.some(r => r.name === 'Admin') || message.member.roles.cache.some(r => r.name === 'Fejlesztő') || message.member.roles.cache.some(r => r.name === 'Tulajdonos') || message.member.roles.cache.some(r => r.name === 'Csapatvezető') || message.member.roles.cache.some(r => r.name === 'Discord Konfig')){
            //message.delete()
            //.then(msg => console.log(`Deleted Command message from ${msg.author.username}`))
            //.catch(console.error);
    
            bot.commands.get('help').execute(message, args);
            //}
        }   
        
        if (command === 'otlet'){
            //if(message.member.roles.cache.some(r => r.name === 'Helper') || message.member.roles.cache.some(r => r.name === 'Moderátor') || message.member.roles.cache.some(r => r.name === 'Admin') || message.member.roles.cache.some(r => r.name === 'Fejlesztő') || message.member.roles.cache.some(r => r.name === 'Tulajdonos') || message.member.roles.cache.some(r => r.name === 'Csapatvezető') || message.member.roles.cache.some(r => r.name === 'Discord Konfig')){
            message.delete()
            .then(msg => console.log(`Deleted Command message from ${msg.author.username}`))
            .catch(console.error);
    
            bot.commands.get('otlet').execute(message, args);
            //}
        }   
    }else{
        message.delete()
        .then(msg => console.log(`Deleted Command message from ${msg.author.username} used in wrong channel`))
        .catch(console.error);
    }
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    if(message.member.roles.cache.some(r => r.name === '「💻Fejlesztő💻」') || message.member.roles.cache.some(r => r.name === '「🟠Fő Tulajdonos🟠」') || message.member.roles.cache.some(r => r.name === '|*|') || message.member.roles.cache.some(r => r.name === '「🔴Al Tulajdonos🔴」')){
        const messageArray = message.content.split(' ');
        const cmd = messageArray[0];
        const args = messageArray.slice(1);

        if (cmd === '!mpoll'){
            message.delete()
            .then(msg => console.log(`Deleted Command message from ${msg.author.username}`))
            .catch(console.error);
            let pollChannel = message.mentions.channels.first();
            let pollDescription = args.slice(1).join(' ');

            let embedPoll = new Discord.MessageEmbed()
            .setTitle('Új szavazás!')
            .setDescription(pollDescription + '\n\n1️⃣' + ' - Igen' + '\n\n2️⃣' + ' - Nem')
            .setTimestamp()
            .setFooter('Készítette: ' + message.author.username , 'https://dc.magicaladventures.hu/imgs/logo.png', 'https://magicaladventures.craftingstore.net')
            .setColor('#D73ED7')
            let msgEmbed = await pollChannel.send(embedPoll);
            await msgEmbed.react('1️⃣')
            await msgEmbed.react('2️⃣')
        }

    }else{
       
      }

})

bot.login('');