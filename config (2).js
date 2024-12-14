const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LdxwEJKS#ImQ05wStc9o6IGiTQC0krsuZphfe6qUzSxPLPU--fXg",
ALIVE_IMG: process.env.ALIVE_IMG || "https://avatars.githubusercontent.com/u/180777006?s=400&u=32ae9409b34dcd2d768fe740d61af7a7d22c3ba4&v=4",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello i am VIDZ-MD ,i am alive now!*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",// public // inbox - inbox // groups groups ( line type)
};
