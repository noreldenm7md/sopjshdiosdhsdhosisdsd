const Discord = require('discord.js');
const client = new Discord.Client();
const prefix "#";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor(GRAY)
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("Welcome To Codes Shop.")
         wc.sendEmbed(embed);
});


  client.on('message', async rokz => {
    if(rokz.content.startsWith(prefix + "تقديم")) {
      let lang = '';
      let time = '';
      let expe = '';
      let fillter = m => m.author.id === rokz.author.id
      await rokz.channel.send("ما اسمك ؟").then(e => {
     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
     .then(co => {
       lang = co.first().content;
        co.first().delete();

       e.edit(`هل سبق ان عملت في متجر من قبل
[${lang}]`)
       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
       .then(col => {
         time = col.first().content;
          col.first().delete();

            e.edit(`ماذا سوف تبيع ؟
[${time}]
[${lang}]`)
            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })
            .then(coll => {
              expe = coll.first().content;
               coll.first().delete();

               e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)
              let rokzz = rokz.guild.channels.find("name", "تقديم")
              setTimeout(() => {
                e.edit("تم التقديم")
              }, 3000)
              rokzz.send(`
                تقديم من ${rokz.author}

  الاسم :
  \`${lang}\`
 هل سبق ان عملت في متجر من قبل :
  \`${time}\`
 ماذا سوف تبيع :
  \`${expe}\`
                `).then(rokzzz => {
                  rokzzz.react("✅")
                  rokzzz.react("❌")
                })
            })
       })
     })
   })
    }
  })


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
