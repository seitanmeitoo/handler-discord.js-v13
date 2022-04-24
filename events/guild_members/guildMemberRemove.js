const { MessageEmbed, Formatters } = require('discord.js');
const dayjs = require('dayjs');

module.exports = {
  name: 'guildMemberRemove',
  once: false,
  async execute(client, member) {
    const creationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
    const relativeCreationTimestamp = Formatters.time(dayjs(member.user.createdTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
    const joinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.ShortDateTime);
    const relativeJoinTimestamp = Formatters.time(dayjs(member.joinedTimestamp).unix(), Formatters.TimestampStyles.RelativeTime);
    const leaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.ShortDateTime);
    const relativeLeaveTimestamp = Formatters.time(dayjs().unix(), Formatters.TimestampStyles.RelativeTime);
    
    const embed = new MessageEmbed()
      .setAuthor({ name: `${member.user.tag} (${member.id})`, iconURL: member.user.displayAvatarURL() })
      .setColor('#dc143c')
      .setDescription(`± Nom d'utilisateur : ${member} - \`${member.user.tag}\` (${member.id})\n
        ± A créer son compte le : ${creationTimestamp} (${relativeCreationTimestamp})\n
        ± A rejoint le : ${joinTimestamp} (${relativeJoinTimestamp})\n
        ± A quitté le : ${leaveTimestamp} (${relativeLeaveTimestamp})`)
      .setTimestamp()
      .setFooter({ text: 'Un utilisateur viens quitter le serveur !' });
    
    const logChannel = client.channels.cache.get('958787301935300658');

    logChannel.send({ embeds: [embed] });
  },
};