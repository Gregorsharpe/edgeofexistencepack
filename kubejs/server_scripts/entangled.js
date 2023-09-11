ServerEvents.recipes(event => { //listen for the "recipes" server event.
    event.remove({id: 'entangled:block'})
    event.remove({id: 'entangled:item'})

    event.shaped(
        'entangled:block', // arg 1: output
        [
          'PNP',
          'NDN',
          'PNP'
        ],
        {
          P: 'minecraft:ender_pearl',
          N: 'minecraft:netherite_ingot',
          D: 'minecraft:diamond'
        }
      )

    event.shaped(
    'entangled:block', // arg 1: output
    [
        ' PS',
        ' NP',
        'N  '
    ],
    {
        P: 'minecraft:ender_pearl',
        N: 'minecraft:netherite_ingot',
        S: 'minecraft:nether_star'
    }
    )
})