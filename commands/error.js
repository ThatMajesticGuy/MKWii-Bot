const Discord = require('discord.js')
const request = require('request')

exports.run = (bot, message, args) => {
const error = message.content.split(" ").slice(1).join(" ")
if (!error) return message.channel.send("What error are you trying to troubleshoot?")
if (isNaN(error)) return message.channel.send("That is not an error, as it is not even numbers")
const url = `https://wiimmfi.de/error?e=${error}&&m=json`
  request({
      url: url,
      json: true
  }, function (error, response, body) {
body = JSON.parse(body.trim())
      if (!error && response.statusCode === 200) {
     body[0].infolist.forEach(function(res) {
  console.log(res);
});
      };
  });
      }
      
      exports.help = {
      name: "error",
      description: "Gives you a solution of an error",
      usage: "mk!error [error code]"
      }
      
      exports.aliases = []
