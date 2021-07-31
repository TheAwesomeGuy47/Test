  
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
      runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":{["text":"Do not move for 5 seconds to be teleported to spawn"}]}`)
      setTimeout(myFunction, 1000)
      function myFunction() {
        if(player.location == location) {
          runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":{["text":"Do not move for 4 seconds to be teleported to spawn"}]}`)
          setTimeout(myFunction1, 1000)
          function myFunction1() {
            if(player.location == location) {
              runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":{["text":"Do not move for 3 seconds to be teleported to spawn"}]}`)
              setTimeout(myFunction2, 1000)
              function myFunction2() {
                if(player.location == location) {
                  runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":{["text":"Do not move for 2 seconds to be teleported to spawn"}]}`)
                  setTimeout(myFunction3, 1000)
                  function myFunction3() {
                    runCommand(`tellraw "${chatmsg.sender.name}" {"rawtext":{["text":"Do not move for 1 second to be teleported to spawn"}]}`)
                    if(player.location == location) {
                      setTimeout(myFunction4, 1000)
                      function myFunction4() {
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
    }
});
