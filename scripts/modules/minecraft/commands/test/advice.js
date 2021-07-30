  
import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    private: false,
    cancelMessage: true,
    ownerOnly: false,
    name: 'advice',
    aliases: [],
    description: 'Free advice!',
    example: ['advice']
};

Command.register(registerInformation, (chatmsg, args) => {
    runCommand(`say Don't eat yellow colored snow [${chatmsg.message}]`);
});
