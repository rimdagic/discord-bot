module.exports = client => {
    const channelID = '1035545757115236425';
    client.on('guildMemberAdd', member => {
        console.log(member);

        const message = 
        `Welcome to the channel, <@${member.id}> ! \n
        type !roll to roll the dice`;

        const channel = member.guild.channels.cache.get(channelID);

        channel.send(message);
    })
}