const { Command } = require('discord-akairo');

class HelpCommand extends Command {
    constructor() {
        super('help', {
            aliases: ['help', 'commands', 'info'],
            channel: 'guild'
        });
    }

    async exec(message) {
        const embed = this.client.util
            .embed()
            .setColor(0x7289da)
            .setTitle('Guardian');
        const prefix = message.guild.prefix;

        const commands = [
            `*The prefix is currently **\`${prefix}\`***\n`,
            `*The following commands are available, running them displays more information and parameters:* **\`config\` \`prefix\` \`help\` \`limits\` \`recent\` \`reset\`**`
        ];

        const info = [
            `**[GitHub](https://github.com/plexidev/discord-guardian)**`,
            `**[Support Server](https://discord.gg/plexidev)**`
        ];

        embed
            .addField('Information', info.join('\n'))
            .addField('Commands', commands.join('\n'));

        message.channel.send(embed);
    }
}

module.exports = HelpCommand;
