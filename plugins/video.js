const { cmd, commands } = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
  pattern: "video",
  desc: "download videos",
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
    let desc = ` 🔥 *VIDZ-MD VIDEO DOWNLOADER* 🔥 
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
    //download video
    let down = await fg.ytv(url)
    let downloadUrl = down.dl_url
    // send video message
    await conn.sendMessage(from, {
      video: {
        url: downloadUrl
      },
      caption: "*MADE BY VIDZ🧘🏼‍♂️*"
    }, {
      quoted: mek
    })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
