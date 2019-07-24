const Discord = require("discord.js"), // Require Node modules and initialize Discord client
    notbeheeyem = new Discord.Client(),
    request = require("request"),
    otherAliases = require('./otherAliases.js'),
    species = require("./dexlist.js").species,
    fs = require('fs');

console.log("Starting Not-Beheeyem™...");

let activesecret;
let mastersecret;
let gottensecret;

notbeheeyem.on("ready", function() {
    console.log("Not-Beheeyem™ is active! Currently serving in " + String(notbeheeyem.guilds.size) + " guilds.\n");
    notbeheeyem.user.setActivity(`you on shard 15 bajillion jk lol`, { type: 3 }); //Set "playing" status on the user's profile

    notbeheeyem.users.get("168121766118424576").createDM().then(dm => {
        mastersecret = dm;
        activesecret = mastersecret;
        gottensecret = mastersecret;
    }).catch(err);
});

function err(e) {
    console.log(e);
    try {
        mastersecret.send(e);
    } catch (e) {
        try {
            notbeheeyem.channels.get("560624928026787841").send(e);
        } catch (e) {}
    }
}

notbeheeyem.on("message", msg => { // Fires when a message is sent that can be detected by Beheeyem
    if (msg.author.id != notbeheeyem.user.id && !msg.author.bot) {
        try {
            checkItalics(msg);
            if (msg.channel.type = "dm") {
                if (msg.channel.recipient.id == "168121766118424576") {
                    if (msg.content.match(/^!<#\d+>$/)) {
                        activesecret = notbeheeyem.channels.get(msg.content.replace(/!<#|>/g,""));
                    } else if (msg.content.match(/^!<!?@\d+>$/)) {
                        activesecret = notbeheeyem.channels.get(msg.content.replace(/!<#|>/g,""));
                        notbeheeyem.users.get(msg.content.replace(/!<@|>/g,"")).createDM().then(dm => {
                            activesecret = dm;
                        }).catch(err);
                    } else if (msg.content == "!get") {
                        mastersecret.send(activesecret.type == "dm" ? `<@${activesecret.recipient.id}>` : `<#${activesecret.id}>`).catch(err);
                    } else if (msg.content == "!reply") {
                        activesecret = gottensecret;
                    } else if (msg.content[0] == "!" && msg.content.length > 1) {
                        mastersecret.send(">what");
                    } else {
                        activesecret.send(msg.content).catch(err);
                    }
                } else {
                    mastersecret.send(msg.author + ": " + msg.content).catch(err);
                    gottensecret = msg.channel
                }
            }
        } catch (e) {
            err(e)
        }
    }
});


notbeheeyem.login(process.env.TOKEN);

function capitalizeFirstLetter(string) { // Simple function to capitalize the first letter in a string.
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let customFiles = {};
fs.readdir("./custom", (err, files) => {
    files.forEach(file=>customFiles[file.replace(/\..+/,"")]=file);
});

function checkItalics(msg) { // Function to be fired if a message is valid for italicization checking
    let isFound = false,
        pokePast = [],
        pokeCount = 0,
        splits = [msg.content.split("*"), msg.content.split("_")];
    var pokeName;
    for (let j = 0; j < 2; j++) {
        if (isFound) return;
        for (var i = 1; i < splits[j].length - 1; i++) { // Check each substring between asterixes/underscores
            pokeName = splits[j][i].toLowerCase()
                .replace(/\bprandom\b/,species[Math.floor(Math.random() * species.length)])
                .replace(/\beee+\b/,"joltik");
            let isShiny = false, // Sprite defaults to a non-shiny version
                isBack = false, // Sprite defaults to a forward-facing version
                urlBuild = 'https://play.pokemonshowdown.com/sprites/xyani', // Default constructor for a sprite
                a = otherAliases.aliases(msg.guild.id);
            for (let r in a) {
                // if (pokeName.match(new RegExp("\\b"+r+"\\b")) == null) pokeName = pokeName.replace(new RegExp("\\b"+r+"\\b"),a[r]);
                if (pokeName.startsWith(r)) pokeName = pokeName.replace(`${r} `, `${a[r]} `);
                if (pokeName.endsWith(r)) pokeName = pokeName.replace(` ${r}`, ` ${a[r]}`);
                if (pokeName == r) pokeName = a[r];
                if (pokeName.indexOf(` ${r} `) > -1) pokeName = pokeName.replace(` ${r} `, ` ${a[r]} `);
            }
            if (pokeName.split(" ")[0] == "mega") {
                pokeName = pokeName.substring(pokeName.split(" ")[0].length + 1) + "-mega";
            } else if (pokeName.split(' ')[0] == "alolan") {
                pokeName = pokeName.substring(pokeName.split(" ")[0].length + 1) + "-alola";
            }
            if (pokeName.indexOf('shiny') != -1) { // Detect if the potential pokemon is a shiny
                isShiny = true;
                pokeName = pokeName.replace(' shiny', '').replace('shiny ', '').replace('-shiny', '').replace('shiny-', '').replace('shiny', '');
            }
            if (pokeName.indexOf('back') != -1) { // Detect if the potential pokemon is facing away from the camera
                isBack = true;
                pokeName = pokeName.replace(' back', '').replace('back ', '').replace('-back', '').replace('back-', '').replace('back', '');
                pokeName = pokeName.replace("porygon-z","porygonz");
            }
            pokeName = pokeName.replace(" ", "-");
            let imgPoke = pokeName.toLowerCase();
            if (pokeCount > 1) break;
            if (pokePast.indexOf(imgPoke) != -1) continue;
            pokePast.push(imgPoke);
            if (species.indexOf(imgPoke) > -1) pokeCount++;
            if (isBack) urlBuild += '-back';
            if (isShiny) urlBuild += '-shiny';
            urlBuild += '/';
            /* jshint ignore:start */
            if (imgPoke == "slowpoke") {
                setTimeout(()=>{
                    msg.channel.send('', {
                        file: urlBuild + imgPoke + ".gif"
                    });
                }, 5000);
            } else if (imgPoke == "furry") {
                msg.channel.send('',{file: {attachment: msg.author.displayAvatarURL, name: msg.author.username + ".png"}});
            } else if (imgPoke == "jh") {
                msg.channel.send('<:BanJH:470022066234458112>');
            } else if (imgPoke in customFiles) {
                msg.channel.send('',{file: {attachment: "./custom/"+customFiles[imgPoke]}});
            } else {
                request(urlBuild + imgPoke + ".gif", (err, response) => { // Check to see if the sprite for the desired Pokemon exists
                    if (!err && response.statusCode == 200) {
                        msg.channel.send('', { // If it does, send it  
                            file: response.request.href
                        });
                        isFound = true;
                    }
                });
            }
            /* jshint ignore:end */
            if (isFound) break;
        }
    }
}

process.on("beforeExit", ()=>{
    notbeheeyem.destroy();
});
process.on("uncaughtException", ()=>{
    notbeheeyem.destroy();
});
