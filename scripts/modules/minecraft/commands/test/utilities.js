import { World, Commands } from 'Minecraft';
import { getPlayers } from './lib/utils/others.js';

World.on('everyTick', () => {
  const allPlayers = getPlayers();
  allPlayers.forEach(player => {
    let playerHealth = player.health.current
    Commands.run(`scoreboard players set ${player} health ${playerHealth}`);
    const output = findScore({ objective: 'money' }, { entityRequirements: '[type=player]', minimum: 0 });
    output.compressNum
  });
})
