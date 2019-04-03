import * as fs from "fs";
import * as ts from "typescript";

const tsConfig = ts.readJsonConfigFile("tsconfig.json", p =>
  fs.readFileSync(p, "utf8")
);
const compilerOptions = ts.convertToObject(tsConfig, []);

const program = ts.createProgram(["dist/cli.d.ts"], compilerOptions);
const sourceFile = program.getSourceFile("dist/cli.d.ts");

sourceFile; // => ts.SourceFile (extends ts.Node)
