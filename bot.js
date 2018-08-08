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

client.on('message', (message) => {
   if(message.author.bot) return;
 
   if(message.content === '!alloffline') {
    
    let bot;
    let i = 0;
   
     let bots = message.guild.members.filter(m => m.user.bot && m.user.presence.status === 'offline');
     let map = bots.map(bo => {
       bot += `#${++i} - <@${bo.user.id}>\n`
     })
     
     message.channel.send(bot);
    
   }
})

client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor('#7e9091')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("Welcome To ArabBotsList.  ")
        return wc.sendEmbed(embed);
});

client.on('message', async message => {
 
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + 'خاص')) {
    let args = message.content.split(' ').slice(3);
   
    let mens = message.mentions.members;
    let array = mens.array();
   
    let bot = array[0];
   
   let role = message.guild.roles.find('name', `❃ - ${bot.user.username}`)
   if(!role) return message.reply('لم استطيع ايجاد اي رتبة بإسم البوت');
   
   await message.guild.createChannel(`${bot.user.username}`, 'text', [
    {
      id: message.guild.id,
      allow: ['READ_MESSAGES'],
      deny: ['SEND_MESSAGES']
   },
   {
    id: role.id,
    allow: ['SEND_MESSAGES', 'READ_MESSAGES', 'MANAGE_CHANNEL', 'MANAGE_PERMISSIONS', 'MANAGE_WEBHOOKS', 'MANAGE_MESSAGES', 'MENTION_EVERYONE']
   },
   {
   id: '468698595583983636',
   deny: ['SEND_MESSAGES']
   },
   {
   id: '468688774885277698',
   deny: ['SEND_MESSAGES']
   }
    ]).then(ch => ch.setParent('469200362163929088'));
   
   message.channel.send('تم انشاء القناة بنجاح')
  }
})

client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("** :question:  حسنا, قم بكتابة ايدي البوت**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('** رائع, الأن قم بكتابة مميزات بوتك :question:**').then(m => {
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**اخيرا وليس اخرا, قم بكتابة عدد السيرفرات والمستخدمين :question: **').then(ms => {
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
var gg = message.guild.channels.find('name', 'التقديمات')
if(!gg) return;
if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الأيدي :question:  : \n ${lan}\nالمميزات :link: :\n ${md} \nعدد السيرفرات والمستخدمين :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`Arab Bots List.`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})



const developers = ["456641975932813345"]
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحه```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('guildMemberAdd', (member) => {
let channel = client.channels.get('468619241310912522')
if(member.user.bot) {
channel.send(`**لقد تم قبول البوت :white_check_mark:  \n اسم البوت : ${member} **`)
}
})

client.on('message', message => {
if(message.content === '.') {
  message.channel.send('**`اهلا وسهلا بك في السيرفر الأول لدعم البوتات العربية ` __Arab Bots List.__ :rose: `**')
 }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
