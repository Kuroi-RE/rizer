const Discord = require("discord.js");
const { token, prefix } = require("./rizerUtil/config.json");

// client init
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Rizer ready");
});

client.login(token);
