"use strict";
exports.__esModule = true;
var yargs = require("yargs");
var helpers_1 = require("yargs/helpers");
console.log("lolllllllllllllllll");
yargs(helpers_1.hideBin(process.argv))
    .command("serve <projectPath>", "Serves a function project via HTTP", function (yargs) {
    return yargs
        .positional("projectPath", {
        type: "string",
        describe: "The directory that contains the function(s)"
    })
        .option("port", {
        alias: "p",
        type: "number",
        description: "The port the webserver should listen on.",
        "default": 8080
    })
        .option("host", {
        alias: "h",
        type: "string",
        description: "The host the webserver should bind to.",
        "default": "localhost"
    });
}, function (args) {
    console.log(args);
});
