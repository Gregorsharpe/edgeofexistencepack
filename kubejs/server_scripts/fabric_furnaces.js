ServerEvents.recipes(event => { //listen for the "recipes" server event.
    event.remove({output: 'fabric-furnaces:emerald_furnace'})
    event.remove({output: 'fabric-furnaces:crystal_emerald_furnace'})
    event.remove({output: 'fabric-furnaces:end_furnace'})
    event.remove({output: 'fabric-furnaces:crystal_end_furnace'})
    event.remove({output: 'fabric-furnaces:ethereal_furnace'})
    event.remove({output: 'fabric-furnaces:crystal_ethereal_furnace'})
})