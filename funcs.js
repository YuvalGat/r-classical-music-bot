const config = require('./config');
const YouTube = require('youtube-node');

let apiKey = config.api_key;
let yt = new YouTube();

yt.setKey(apiKey);

module.exports = {
    getTitleByLink: msg => {
        yt.getById(msg.content.split('watch?v=')[1], function(error, result) {
            if (error) {
                msg.reply('Please try again.');
            }
            else {
                msg.reply(result.items[0].snippet.title);
            }
        });
    }
};
