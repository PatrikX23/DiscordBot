const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'contacts',
    description: "elérhetőségek a growingról",
    execute(message, args){
        let contactsEmbed = new MessageEmbed()
            .setTitle('MagicalAdventures Elérhetőségek')
            .setDescription('\u200B')
            .addFields(
                { name: '🖥️ Szerver IP (Java)', value: 'play.magicaladventures.hu 1.16-1.17.1' },
                { name: '📱 Szerver IP (Bedrock)', value: 'play.magicaladventures.hu:8215' },
                //{ name: '🌐 Weboldal', value: 'growingmc.com' },
                { name: '🛒 Webshop (Érme Vásárlás)', value: 'magicaladventures.craftingstore.net' },
                //{ name: '✉️ E-mail', value: 'info@growingmc.com' },
                { name: '📰 Facebook', value: 'facebook.com/MagicalBloofler/' },
                //{ name: '📷 Instagram', value: 'instagram.com/gtheorymc/' },
                //{ name: '🔥 Tik-Tok', value: '@gtheorymc' },
                //{ name: '\u200B', value: '\u200B' },
            )
            //.setTimestamp() //nem kell
            .setFooter('MagicalAdventures 2021', 'https://dc.magicaladventures.hu/imgs/logo.png', 'https://magicaladventures.craftingstore.net') 
            .setColor('#D73ED7')
            message.author.send(contactsEmbed).catch(console.error);

            //message.inlineReply({
            //    embed: contactsEmbed,
            //    allowedMentions: { repliedUser: false }
            //  });

            //message.channel.send('Fasz').catch(console.error);
    }
}