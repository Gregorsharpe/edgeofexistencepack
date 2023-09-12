ServerEvents.recipes(event => { //listen for the "recipes" server event.
    event.remove({id: 'createaddition:crafting/diamond_grit_sandpaper'})
    event.shapeless('createaddition:diamond_grit_sandpaper', ['minecraft:paper', 'createaddition:diamond_grit'])
})