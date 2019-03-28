let aDefault = () => {
    return {
        'ace': 'suicune',
        'amph': 'ampharos-mega',
        'baru': 'arcanine',
        'bounty': 'porygonz-shiny',
        'cell': 'gengar',
        'curtis': 'reuniclus',
        'dom': 'charizard',
        'fable': 'flygon-shiny',
        'fug': 'rayquaza',
        'hiccup': 'spinda',
        'ho-oh': 'hooh',
        'josh': 'staraptor',
        'lectro': 'noivern',
        'luc': 'lucario',
        'mene': 'cosmog',
        'mime jr.': 'mimejr',
        'mime jr': 'mimejr',
        'monk': 'weavile',
        'mr mime': 'mrmime',
        'mr. mime': 'mrmime',
        'necrozma dawn wings': 'necrozma-dawnwings',
        'necrozma dawn': 'necrozma-dawnwings',
        'necrozma dusk mane': 'necrozma-duskmane',
        'necrozma dusk': 'necrozma-duskmane',
        'necrozma-dawn-wings': 'necrozma-dawnwings',
        'necrozma-dawn': 'necrozma-dawnwings',
        'necrozma-dusk-mane': 'necrozma-duskmane',
        'necrozma-dusk': 'necrozma-duskmane',
        'ngb': 'ampharos',
        'poiklers': 'volcarona-shiny',
        'quote': 'sableye',
        'romulator': 'mawile',
        'runtime': 'lapras',
        'semper': 'flygon',
        'shep': 'ampharos-mega',
        'sigma': 'gliscor-shiny',
        'sol': 'solrock',
        'stall': 'sableye-mega',
        'surv': 'espeon',
        'tallow': 'zangoose',
        'tapu bulu': 'tapubulu',
        'tapu fini': 'tapufini',
        'tapu koko': 'tapukoko',
        'tapu lele': 'tapulele',
        'tech': 'vileplume',
        'thane': 'absol',
        'type null': 'typenull',
        'type: null': 'typenull',
        'verizon': 'virizon'
    }
}

let custom = {
    'blue': 'popplio',
    'emily': 'luxio-f',
    'erebus': 'meowstic',
    'flare': 'flareon',
    'hound': 'houndoom',
    'jenn': 'bellossom',
    'jordan': 'dewott',
    'matt': 'meowstic',
    'minty': 'archeops',
    'orn': 'decidueye-shiny',
    'pally': 'lilligant',
    'sapph': 'glaceon',
    'skul': 'totodile',
    'swed': 'vaporeon',
    'thirst': 'lilligant',
    'zytom': 'lurantis',
    // super custom haha yes
    "flores": "sceptile",
    "puppo": "lillipup",
    "repel": "meditite",
    "indigo": "zorua",
    "senshi": "wartortle",
    "haha": "vulpix-alola",
    "yes": "vulpix",
    "sherbet": "amaura",
    "liam": "espeon",
    "clark": "froakie",
    "spaghet": "solosis",
    "eehee": "sableye",
    "lego": "archen",
}

exports.aliases = (id) => {
    let toReturn = {};
    Object.assign(toReturn, aDefault());
    if (id == 111504456838819840) {
        return toReturn;
    } else {
        return Object.assign(toReturn, custom);
    }
}
