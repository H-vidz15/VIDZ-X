const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
} 

let madeMenu = `🤟🏻 *Wagwan ${pushname}*
> *DOWNLOAD COMMANDS* 👇🏻 

${menu.download}

> *MAIN MENU* 🔥

${menu.main}

> *GROUP MENU* ▶️

${menu.group}

> *OWNER MENU* 🧘🏼‍♂️

${menu.owner}

> *CONVERT MENU* 🤸

${menu.convert}

> *SEARCH MENU* 🔎

${menu.search}

*POWERED BY VIDZ* 🤟🏻
`
await conn.sendMessage(from,{image:{url:"https://avatars.githubusercontent.com/u/180777006?s=400&u=32ae9409b34dcd2d768fe740d61af7a7d22c3ba4&v=4"},caption:madeMenu},{quoted:mek})



}catch(e){
console.log(e);
reply(`${e}`) 
}
})
