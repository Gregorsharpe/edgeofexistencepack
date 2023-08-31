// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    let tiers = [
      "copper",
      "iron",
      "gold",
      "diamond",
    ]

    let colours = [
      "",
      "white",
      "orange",
      "magenta",
      "light_blue",
      "yellow",
      "lime",
      "pink",
      "gray",
      "light_gray",
      "cyan",
      "purple",
      "blue",
      "brown",
      "green",
      "red",
      "black"
    ]

    // Reinforced Chests
    event.remove({mod: 'reinfchest'})
    tiers.forEach(tier => {
      let base = `${tier == 'copper'
                          ? '#c:wooden_chests' 
                          : 'reinfchest:'.concat(tiers[tiers.indexOf(tier) - 1], '_chest')}`
      event.shaped(
        `reinfchest:${tier}_chest`,
        [
          'BVB',
          'BCB',
          'BBB'
        ],
        {
          B: `minecraft:${tier}_block`,
          C: base,
          V: tier === 'gold' | tier === 'diamond' ? 'botania:ender_air_bottle' : `minecraft:${tier}_block`
        }
      )
    });

    event.smithing(
      'reinfchest:netherite_chest',
      'reinfchest:diamond_chest',
      'minecraft:netherite_ingot'
    )

    // Reinforced Barrels
    event.remove({mod: 'reinfbarrel'})
    tiers.forEach(tier => {
      let base = `${tier == 'copper'
                          ? '#c:wooden_barrels' 
                          : 'reinfbarrel:'.concat(tiers[tiers.indexOf(tier) - 1], '_barrel')}`
      event.shaped(
        `reinfbarrel:${tier}_barrel`,
        [
          'BVB',
          'BCB',
          'BBB'
        ],
        {
          B: `minecraft:${tier}_block`,
          C: base,
          V: tier === 'gold' | tier === 'diamond' ? 'botania:ender_air_bottle' : `minecraft:${tier}_block`
        }
      )
    });

    event.smithing(
      'reinfbarrel:netherite_barrel',
      'reinfbarrel:diamond_barrel',
      'minecraft:netherite_ingot'
    )

    // Reinforced Shulkers
    event.remove({mod: 'reinfshulker'})
    colours.forEach(colour => {
      let colourPrefix = `${colour ? colour.concat('_') :''}`
      tiers.forEach(tier => {
        let base = `${tier == 'copper'
                            ? `minecraft:${colourPrefix}shulker_box`
                            : `reinfshulker:${colourPrefix}`.concat(tiers[tiers.indexOf(tier) - 1], '_shulker_box')}`

        event.shaped(
          `reinfshulker:${colourPrefix}${tier}_shulker_box`,
          [
            'BVB',
            'BCB',
            'BBB'
          ],
          {
            B: `minecraft:${tier}_block`,
            C: base,
            V: tier === 'gold' | tier === 'diamond' ? 'botania:ender_air_bottle' : `minecraft:${tier}_block`
          }
        )
      });
      event.smithing(
        `reinfshulker:${colourPrefix}netherite_shulker_box`,
        `reinfshulker:${colourPrefix}diamond_shulker_box`,
        'minecraft:netherite_ingot'
      )
    });

    tiers.slice().concat(['netherite']).forEach(tier => {
      event.shaped(
        `reinfshulker:${tier}_shulker_box`,
        [
          ' S ',
          ' C ',
          ' S '
        ],
        {
          S: `minecraft:shulker_shell`,
          C: `reinfchest:${tier}_chest`
        }
      )
    });
  })