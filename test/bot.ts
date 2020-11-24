import { JSClient, JSCMessage, Command, JSCEmbed } from 'javascript-cord';
import { Config } from './config';
const config = new Config;

const bot = new JSClient();

bot.start(`${config.token}`);

const prefix = '?';

bot.on('message', async (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd === 'hello') {
        message.create("Hello world")
    } else if (cmd === 'ping') {
        message.create(`Pong, ${message.ping} ms!`)
    } else if (cmd === 'embed') {
        const em = new JSCEmbed({randomColor:true})
        .setAuthor(`This is an embed.`)
        .setDescription("Hello :)")
        message.create(em);
    } else if (cmd === 'æ') {
        const ae = new JSCEmbed({description:"æ"});
        message.create(ae)
    } else if (cmd === "fetch") {
        const json = await bot.getApi("https://some-random-api.ml/facts/dog");
        message.create(`Dog Fact: ${json.fact}`)
    };
});