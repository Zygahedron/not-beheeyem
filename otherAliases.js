let aDefault = () => {
    return {
        'fug': 'rayquaza',
        'ho-oh': 'hooh',
        'luc': 'lucario',
        'mime jr.': 'mimejr',
        'mime jr': 'mimejr',
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
        'runtime': 'lapras',
        'shep': 'ampharos-mega',
        'sol': 'solrock',
        'tapu bulu': 'tapubulu',
        'tapu fini': 'tapufini',
        'tapu koko': 'tapukoko',
        'tapu lele': 'tapulele',
        'type null': 'typenull',
        'type: null': 'typenull',
        'verizon': 'virizon'
    }
}

let custom = {
    'emily': 'luxio-f',
    'flare': 'flareon',
    'hound': 'houndoom',
    'thirst': 'lilligant',
    // super custom haha yes
    "flores": "sceptile",
    "puppo": "lillipup",
    "repel": "meditite",
    "indigo": "zorua",
    "senshi": "wartortle",
    "haha": "vulpix-alola",
    "yes": "vulpix",
    "sherbet": "amaura",
    "clark": "froakie",
    "spaghet": "solosis",
    "eehee": "sableye",
    "lego": "archen",
    "friendburner": "golett",
    "xibalba": "absol",
    "holly": "porygon-z",
    "gamma": "porygon",
    "natalia": "shinx-f",
    "frosty frosty": "purrloin",
    "renne": "shiny chikorita",
    "flipdog": "silvally-fighting",
    "hands": "braixen",
    "liam": "espeon",
    "snowpix": "vulpix-alola",
    "iceshrew": "sandshrew-alola",
    "pumbloom": "whismur",
    "terry": "tangela",
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
