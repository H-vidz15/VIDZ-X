const { cmd, commands } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
  pattern: "song",
  desc: "download songs",
  category: "download",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("please give me your url or title")
    const search = await yts(q)
    if (!search || !search.videos || search.videos.length === 0) {
      return reply("No results found")
    }
    const data = search.videos[0];
    const url = data.url
    let desc = ` 🔥 *VIDZ-MD SONG DOWNLOADER* 🔥 
title: ${data.title} 
description: ${data.description} 
time: ${data.timestamp} 
ago: ${data.ago} 
views: ${data.views} 
*MADE BY VIDZ 🤟🏻* `
    await conn.sendMessage(from, {
      image: {
        url: data.thumbnail
      },
      caption: desc
    }, {
      quoted: mek
    });
    //download audio
    let down = await fg.yta(url)
    let downloadUrl = down.dl_url
    // send audio + document message
    await conn.sendMessage(from, {
      audio: {
        url: downloadUrl
      },
      mimetype: "audio/mpeg"
    }, {
      quoted: mek
    })
    await conn.sendMessage(from, {
      document: {
        url: downloadUrl
      },
      mimetype: "audio/mpeg",
      fileName: data.title + ".mp3",
      caption: "*MADE BY VIDZ🧘🏼‍♂️*"
    }, {
      quoted: mek
    })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
