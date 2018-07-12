const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "!";
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


client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("`ما اسمك`").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`\`هل سبق وان كنت في متجر [${lan}]\``)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        e.edit(`\`ماذا ستبيع[${lan}]\``)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("`جاري التقديم علي طلبك...`").then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setTitle('**تقديم رتبة سبورت**')
.setDescription(`الاسم : /n${lan}\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- n\هل سبق وان كنت في متجر : ${md} \n =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\nماذا ستبيع : \n${br} =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- \nتم التقديم علي رتبة بائع بواسطة : \n${message.author.id}`)  
.setTimestamp()
});
}        
})
})
})
})
})
 }
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
