"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callCommand = exports.parseArgs = void 0;
const yargs = require("yargs");
const helpers_1 = require("yargs/helpers");
const path = require("path");
function parseArgs() {
    return yargs(helpers_1.hideBin(process.argv))
        .command("serve <projectPath>", "Serves a function project via HTTP", (yargs) => {
        return yargs
            .positional("projectPath", {
            type: "string",
            describe: "The directory that contains the function(s)",
        })
            .option("port", {
            alias: "p",
            type: "number",
            description: "The port the webserver should listen on.",
            default: 8080,
        })
            .option("host", {
            alias: "h",
            type: "string",
            description: "The host the webserver should bind to.",
            default: "localhost",
        });
    }, (args) => {
        args.projectPath = path.resolve(args.projectPath);
    })
        .strictCommands()
        .demandCommand(1)
        .parse();
}
exports.parseArgs = parseArgs;
function callCommand() {
    const args = parseArgs();
    let userFunction;
    try {
        console.log(args);
        console.log("Load user function " + args.projectPath);
    }
    catch (error) {
        console.log("nope " + error.message);
        console.log(error);
        process.exit(1);
    }
    console.log("Start server here " + args);
}
exports.callCommand = callCommand;
callCommand();
