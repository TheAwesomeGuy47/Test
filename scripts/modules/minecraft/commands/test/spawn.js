  
import Command from "../../lib/commandHandler.js";
import { runCommand } from "../../lib/utils/others.js";

const registerInformation = {
    private: false,
    cancelMessage: true,
    ownerOnly: false,
    name: 'spawn',
    aliases: ['s'],
    description: 'Go to spawn',
    example: ['spawn']
};

Command.register(registerInformation, (chatmsg, args) => {
    runCommand(`tp "${chatmsg.sender.name}" 0 100 0`);
});
