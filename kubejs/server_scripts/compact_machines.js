// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
    
    function fixCompactMachineRecipe(event, machine, coreBlock) {
      event.remove({output: machine})
      event.shaped(
        machine,
        [
          'WWW',
          'WBW',
          'WWW'
        ],
        {
          W: 'compactmachines:wall',
          B: coreBlock
        }
      )
    }

    fixCompactMachineRecipe(event, 'compactmachines:machine_tiny', 'minecraft:copper_block')
    fixCompactMachineRecipe(event, 'compactmachines:machine_small', 'minecraft:iron_block')
    fixCompactMachineRecipe(event, 'compactmachines:machine_normal', 'minecraft:gold_block')
    fixCompactMachineRecipe(event, 'compactmachines:machine_large', 'minecraft:obsidian')
    fixCompactMachineRecipe(event, 'compactmachines:machine_giant', 'minecraft:diamond_block')
    fixCompactMachineRecipe(event, 'compactmachines:machine_maximum', 'minecraft:netherite_block')
  })