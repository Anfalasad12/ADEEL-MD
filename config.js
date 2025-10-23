const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUZEbjcxVEc5ZUNsRlhFcnVwbzlmTSt4d2ExYkppbVc1b2JNT3RBUm9WTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHhQYzBxVGt1eklWTjBFUUdNbjJ2VDFrYTVFOFJWQ2ZWM1ExU0poaUhIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSFJMc2hKdGg5SVNsNkU1cFRJRXMyUTZVRXRqeFE5UFVScmEyL2d0WFU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzc2hvQ05QbzVOY2d5SEpyU0hwM3ZOTmZiMnhWNDJGVnFYWmV1ZzNqcFVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCbFhYQ1NiZFFkVWxtU1pVdXBiVWxaa05oM3hMUGwyeHRDQ1EyWWxmMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklhZWhxYmFrVGhGakMwZkJJUnlDcnRsak42TUJVcm92Ykg0WEVHL1E0UW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0g3Qlk0aFRjTWw0cnYrTnExN0dkOWJKNW5SREhCSDhreDkwem1RbEJXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnc1dkxmRzVRcXVFbGlySlJJUy9ZSjVaN3ZLa0ZTczJhTFJ5SWg4dHNuRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0yRjNYS0RaTlpiYldZTm9JNWt4cFEvejQyRzBtY2dEb3ZFTDRFc2xqb3hvc3NwQi9EQ0cvSDBlMEtBUVV2aUMybTNkSTZoeW1zYkwyYmNydGxmeUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6IkkwVEhUVCs4ZDN5dVRncXMrYXZsOHdsaXkwbjBKclRUOWtEWU1VWld3dkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDk3NzQ5MjIzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RTZCQjVEMDZDNDI5MDgxQjIzQjE0QjA5MTAyQTVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjExODU4NzN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6dHJ1ZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWlYxRkdIQVkiLCJtZSI6eyJpZCI6IjkyMzQ5Nzc0OTIyMzo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5vV2F5IiwibGlkIjoiMTAzNjIwODY3NTQzMTAyOjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNUE4yMmdRd3FEbXh3WVlCaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5dHZ1cSs2Y0s2a3lJWDZ1L0p0NU1TUjhuRk9HMzVkNU1rVExLa2llbFRBPSIsImFjY291bnRTaWduYXR1cmUiOiI5NjN1dEhhTEkrdFFvQ0V6TGQ3TjBHWG1IWHl5L0VtR0d1ajNDV25XL1NNcGkxcTVHTVBrdU1XeE5adEgvcDdDbWZsQS85aEt1M09ydDROVWNrWFNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia1lCYUdMMHRsNFJsWTY3SHhpbjkzUmZsZWdVTVZJSEVza2ZYMjd5a0toWU10MHpMWXRVM3d4VzV0K25LSTZmSzNvNmorRkZURUZmZFluN3crRUV0Q1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0OTc3NDkyMjM6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcmI3cXZ1bkN1cE1pRitydnliZVRFa2ZKeFRodCtYZVRKRXl5cElucFV3In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjExODU4NzEsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFdFIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ASAD-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/hg5hj6.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ASAD-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ASAD-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923497749223",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ASAD-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀsad-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hg5hj6.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ASAD-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
