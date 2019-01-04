const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523048543133630465")
setInterval(function() {
channel.send(`اشهد ان لا الله الا الله و اشهد ان محمد رسول الله `);
}, 30)
})

client.login("NTMwNzU4Nzk3NTAxNzkyMjg3.DxEEPA.BHr0PRlYWrFe6Ym_3vpqCBsuyUw");
