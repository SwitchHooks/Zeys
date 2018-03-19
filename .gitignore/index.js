const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".")

bot.on('ready', function() {
    bot.user.setGame("Mon créateur me code | Ne le cassez pas les couilles")
    console.log("Prêt à travailler !");

});

bot.login("NDI0OTQ2NDQxNDE3NjU0Mjcz.DZFqKQ.Vb4lwJj2luVeR3ncig143tfZygg")

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -``.help``");
    }

    if (message.content === "Hellow !")
    message.reply("**Bien le bonjour, par contre on dit Bonjour Zeus !** :zap:")
    console.log("Commande Hellow ! Effectué");
});
