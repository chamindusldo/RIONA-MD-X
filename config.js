const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'bQlSVYZR#mKtj3xWCnN2v0P89MG6vK2Jd94HANp7edLwHdEvbyck' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'chamindusldo': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '': process.env.GITHUB_AUTH_TOKEN
};
