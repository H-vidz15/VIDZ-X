const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LdxwEJKS#ImQ05wStc9o6IGiTQC0krsuZphfe6qUzSxPLPU--fXg",
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "hello, i am alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "",
MODE: process.env.MODE || "public",
};
