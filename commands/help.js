const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',
    description: "parancs lista",
    execute( message, args){
        let contactsEmbed = new MessageEmbed()
            .setTitle('MagicalBot Elérhető Parancsok')
            //.setDescription('```!mhelp, !mcontacts```')
            .addField("Parancsok:", "`!mhelp`", false)
            .addField("Elérhetőségek:", "`!mcontacts`", false)
            .setFooter('MagicalAdventures 2021', 'https://dc.magicaladventures.hu/imgs/logo.png', 'https://magicaladventures.craftingstore.net') 
            .setColor('#D73ED7')
            //message.author.send(contactsEmbed).catch(console.error);

            message.inlineReply({
                embed: contactsEmbed,
                allowedMentions: { repliedUser: false }
              });

            //message.channel.send('Fasz').catch(console.error);
    }
}