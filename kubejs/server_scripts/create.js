ServerEvents.recipes(event => { //listen for the "recipes" server event.
    event.remove({id: 'createaddition:crafting/diamond_grit_sandpaper'})
    event.shapeless('createaddition:diamond_grit_sandpaper', ['minecraft:paper', 'createaddition:diamond_grit'])
})

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    event.remove({id: 'create_deco_casing:recette_experience_block_button'})
    event.shapeless('create_deco_casing:experience_block_button', ['create:experience_block', '#byg:all/buttons'])
})