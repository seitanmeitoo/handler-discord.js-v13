const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'poll',
  description: 'Créer et poster un sondage avec deux choix',
  async run(client, message, args) {
    if (!args[0]) return message.reply("Merci d'indiquer votre question pour votre sondage !");

    const embed = new MessageEmbed()
      .setTitle('**' + args.slice(0).join(' ') + '**')
      .setColor('#00a3b5')
      .setDescription('✅ Oui\n\n❌ Non')
      .setTimestamp()
      .setFooter({ text: `Nouveau sondage créé par ${message.author.tag} !` });

    const poll = await message.reply({ embeds: [embed] });
    poll.react('✅');
    poll.react('❌');
  },
  options: [
    {
      name: 'content',
      description: 'Taper la question de votre sondage',
      type: 'STRING',
      required: true,
    },
    {
      name: 'choice1',
      description: 'Taper le premier choix de votre sondage',
      type: 'STRING',
      required: true,
    },
    {
      name: 'choice2',
      description: 'Taper le deuxième choix de votre sondage',
      type: 'STRING',
      required: true,
    }
  ],
  async runSlash(client, interaction) {
    const pollContent = interaction.options.getString('content');
    const pollChoiceOne = interaction.options.getString('choice1');
    const pollChoiceTwo = interaction.options.getString('choice2');

    const embed = new MessageEmbed()
      .setTitle('**' + pollContent + '**')
      .setColor('#00a3b5')
      .setDescription('1️⃣ ' + pollChoiceOne + '\n\n2️⃣ ' + pollChoiceTwo)
      .setTimestamp()
      .setFooter({ text: `Nouveau sondage créé par ${interaction.user.tag} !` });

    const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
    poll.react('1️⃣');
    poll.react('2️⃣');
  },
};