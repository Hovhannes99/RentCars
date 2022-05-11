const find = require("find");
import { execSync } from "child_process";

const scriptName = process.argv[2];
const args = process.argv.slice(3);
const findTarget = () => find.fileSync(new RegExp(scriptName), __dirname)[0];

const target = findTarget();
if (!target)
  throw new Error(`'${scriptName}' was not found under './tools' directory`);

execSync(`yarn ts-node --project ./tools/tsconfig.json ${target} ${args}`, {
  stdio: "inherit",
});
