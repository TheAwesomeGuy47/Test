  
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
    const player = chatmsg.sender
    const location = player.location
    if(player.location == location) {
      setTimeout(myFunction, 1000)
      function myFunction() {
        if(player.location == location) {
          setTimeout(myFunction1, 1000)
          function myFunction1() {
            if(player.location == location) {
              setTimeout(myFunction2, 1000)
              function myFunction2() {
                if(player.location == location) {
                  setTimeout(myFunction3, 1000)
                  function myFunction4() {
                    if(player.location == location) {
                      runCommand(`tp "${chatmsg.sender.name}" 0 100 0`);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
});
