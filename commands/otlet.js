const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js');
const client = new Discord.Client();
let myChannel = '882369290207125524'

module.exports = {
    name: 'otlet',
    description: "parancs lista", 
    execute: async (message, args) => {
        let description = args.slice(0).join(' ');
        let otletEmbed = new MessageEmbed()
        //const channel = message.guild.channels.cache.find(channel => channel.name === 'config')
            //.setTitle('Új ötlet!')
            //.addField("_ _", "_ _", false)
            .addField("Felhasználó:", "`" + message.author.username + "`", false)
            .addField("_ _", "_ _", false)
            .addField("Ötlet leírása:", "`" + description + "`", false)
            .setTimestamp()
            .setThumbnail("https://dc.magicaladventures.hu/imgs/logo.png")
            .setFooter('Felhasználó ID: ' + message.author.id)
            .setColor('#D73ED7')
            //message.author.send(otletEmbed).catch(console.error);
            let msgEmbed = await message.guild.channels.cache.get(myChannel).send(otletEmbed)
            await msgEmbed.react('<:upvote:906653009654738954>')
            await msgEmbed.react('<:downvote:906653169227022376>')
            //message.inlineReply({
            //    embed: contactsEmbed,
            //    allowedMentions: { repliedUser: false }
            //  });

            //message.channel.send('Fasz').catch(console.error);
    }
}