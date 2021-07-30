  
import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    private: false,
    cancelMessage: true,
    ownerOnly: false,
    name: 'advice',
    aliases: [],
    description: 'Free advice!',
    example: ['ping']
};

Command.register(registerInformation, (chatmsg, args) => {
    runCommand(`say pong! [${chatmsg.message}]`);
});
