module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log('Le bot est prêt !');

    const devGuild = await client.guilds.cache.get('958786284602683413');
    devGuild.commands.set(client.commands.map(cmd => cmd));
  },
};