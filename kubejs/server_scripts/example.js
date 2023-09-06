// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')



ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!
    
    // This part, inside the curly braces, is the callback.
    // You can modify as many recipes as you like in here,
    // without needing to use ServerEvents.recipes() again.
      
    event.shaped(
        Item.of('minecraft:chest', 4), // arg 1: output
        [
          'LLL',
          'L L',
          'LLL'
        ],
        {
          L: '#minecraft:logs'
        }
    )

    event.shaped(
      Item.of('minecraft:stick', 16), // arg 1: output
      [
        '   ',
        ' L ',
        ' L '
      ],
      {
        L: '#minecraft:logs'
      }
    )

    event.remove({output: 'bwplus:rgb_witch_wool'})

  })