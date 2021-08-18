import * as yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as path from "path";

export function parseArgs(): any {
  return yargs(hideBin(process.argv))
    .command(
      "serve <projectPath>",
      "Serves a function project via HTTP",
      (yargs) => {
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
      },
      (args) => {
        args.projectPath  = path.resolve(args.projectPath);
      }
    )
    .strictCommands()
    .demandCommand(1)
    .parse();
}

export function callCommand(): any {
  const args = parseArgs();

  let userFunction;
  try {
    // userFunction = loadUserFunctionFromDirectory(args.projectPath);
    console.log(args);
    console.log("Load user function " + args.projectPath);
  } catch (error) {
    // logger.error("Could not load function: " + error.message);
    console.log("nope " + error.message);
    console.log(error);
    process.exit(1);
  }

  console.log("Start server here " + args);
  // startServer(args.host, args.port, userFunction);
}

callCommand();
