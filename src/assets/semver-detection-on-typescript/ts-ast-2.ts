const hoge = 1;

export { hoge };

// -------------------------------------------

import * as ts from "typescript";

const astNode = sourceFile.getChildren()[0].getChildren()[1];

// 構文の (ex. "ExportDeclaration")
ts.SyntaxKind[astNode.kind];

// コード上の位置（ex. [15, 33]）
[astNode.pos, astNode.getEnd()];

// 特定の構文とみなしてより詳細な処理をする
if (ts.isExportDeclaration(astNode)) {
  const { exportClause } = astNode;
  if (typeof exportClause !== "undefined") {
    // => ['hoge']
    exportClause.elements.map(specifier => specifier.name.escapedText);
  }
}
