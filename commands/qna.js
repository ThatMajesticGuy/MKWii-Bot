  const Discord = require('discord.js');


exports.run = (bot, message, args) => {
  // Simple command
  var embed = new Discord.RichEmbed()
  .setTitle("QnA - General")
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Developed by ThatMajesticGuy", bot.users.get("262410813254402048").displayAvatarURL)
  .setDescription("A general list of questions related to MKWii regarding Wiimmfi, homebrew, etc. If your question is not on here, contact/ask a moderator.")
  .addField("**How do I get to play online like the old days?**", "Consult [this thread] for more information. This applies to users who play by disc, ISO/USB-Loader, etc.")
  .addField("**I just got an error code after attempting to connect to Wiimmfi. What do I do?!**", "If you're new to both Mario Kart Wii and Wiimmfi and this is your first time connecting, you will receive an error code which signifies console regristration and __a waiting time period of 7 days until console activation__. The reason for this is to __prevent Wiimmfi cheaters from joining back immediately online__ after their latest ban in case they decide to evade it. More information about this [here.](https://forum.wii-homebrew.com/index.php/Thread/54794-Error-238xx-Consoles-are-activated-7-days-after-registration-for-MKWii-profiles/)", "To check your current waiting time, visit [this page](https://wiimmfi.de/error) to submit your error code that you received. This is the place to enter any Wiimmfi/nWFC error codes which you can learn more about them after submission. It will pull out information about what it is, what it means, why you got it and how you can ultimately fix the problem.")
  .addField("**Can I use Ocarina/cheat codes in online races?**", "As long as it does not affect the other people in any way who happen to be playing in the same WW/Continental room as you, yes. This applies to texture hacks and such. Otherwise, any other kinds of codes or "hacks" are not allowed. Depending on the severity, you will get banned for it. Ban evasion will result in much more severe consenquences, typically permanent bans. Once permanently banned, it's over; you will never get to play Wiimmfi online ever again.", "If you or someone really want to get into hacking business like back in the day though, there is a custom online region for you to safely do that, known as [WHackR.](https://discord.gg/JRPjW2) To play in this custom region, use the latest code that corresponds to your region (NTSC-U, PAL, etc.) found in [the description of this video.](https://youtu.be/hI6ISCcq498) Include the code in your GCT file.")
  .addField("**How can I report a Wiimmfi cheater?**", "Assuming you have the evidence to support your claim, submit your report [on this thread](https://forums.mkboards.com/threads/wiimmfi-cheater-report-thread.14619/) as soon as possible. ")
  .addField("**How do I get/install CTGP?**", "You can get it from [here](https://www.chadsoft.co.uk/), and you can follow the install guide from there")
  .addField("**Can I play CTGP with an ISO/through USB Loader?**", "Theoretically yes and no. Some say there are a few people out there that can manage to get CTGP on an ISO instead. That being said, unless you're a hacker, it's very, very quite hard if not impossible to get CTGP on an ISO.", "The developers of CTGP are and have been taking steps towards preventing piracy by fully restricting non-disc users from playing their mod. It is illegal to be in posession of an ISO and a Wii emulator if 1) you don't actually own the game (a physical copy of Mario Kart Wii that you purchased) and 2) you don't own a Wii console.")
  .addField("**How do I get to the leaderboards?**", "You have to beat the records of everyone on the specified track you want to set a record in. This will get you on [this leaderboard.](http://www.chadsoft.co.uk/time-trials/)")
  .addField("**Where can I find texture hacks and/or tutorials related to MKW modding, such as making my own custom tracks and music?**", "The [Custom Mario Kart Wiiki](https://http://wiki.tockdom.com/wiki/Main_Page) is the best place for this. The site also includes a database for downloadable distributions which include **custom tracks, hack packs, texture hacked tracks,** etc. The website is fairly active and includes a frequently-updated changelog for distributions on the main homepage.")
  msg.channel.send({embed: embed})
}

exports.help = {
  name: "qna",
  description: "Has a QnA for questions that people may ask in the server",
  usage: "mk!qna"
}

exports.aliases = []
