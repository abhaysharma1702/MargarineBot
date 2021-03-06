const { Command } = require("klasa");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            name: "greet",
            enabled: true,
            runIn: ["text"],
            description: "Have Margarine greet you or someone with a hello!",
            usage: "[user:usersearch]"
        });
    }

    async run(msg, [user]) {
        if (user === null) { return; }        
        if (user.id === this.client.user.id) { return msg.send(this.client.speech(msg, ["greet", "me"], [["-param1", msg.author.username]])); }

        msg.channel.send(this.client.speech(msg, ["greet", "success"], [["-param1", user.username]]));
    }
};