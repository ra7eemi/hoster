require('dotenv').config();
const { Client } = require('discord.js-selfbot-v13')
const client = new Client({checkUpdate: false});
const { joinVoiceChannel } = require('@discordjs/voice');
const config = require('./confin.json')
client.on('ready', async () => {
    const channel = client.channels.cache.get(config.channelID);
    const cmd = client.channels.cache.get(config.cmdChannelId);
    console.log(client.user.username)
    if(channel){ 
        const guild = channel.guild; 
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: true,
          }); 
          if(connection){
            await cmd.send(`m!p ${config.playListURL}`)
            setInterval(async() => {
            await cmd.send(`m!p ${config.playListURL}`)
            },1000 * 60 * 60 * 12)
          }
        setInterval(()=> {
       const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: true,
      });    
        }, 1000 * 60 * 10)
    }
});

client.login(process.env.TOKEN)