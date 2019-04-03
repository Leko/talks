const service: ts.LanguageService = // ...
const quickInfo = service.getQuickInfoAtPosition(
  ファイルパス,
  マウスカーソルの位置
);

// -----

type Hoge = 1 | 2;
export declare type A = 3 | Hoge;
//                 ^^^

// -----

({
  kind: 'type',
  kindModifiers: 'export,declare',
  textSpan: { start: 39, length: 1 },
  displayParts:
   [ { text: 'type', kind: 'keyword' },
     { text: ' ', kind: 'space' },
     { text: 'A', kind: 'aliasName' },
     { text: ' ', kind: 'space' },
     { text: '=', kind: 'operator' },
     { text: ' ', kind: 'space' },
     { text: '3', kind: 'stringLiteral' },
     { text: ' ', kind: 'space' },
     { text: '|', kind: 'punctuation' },
     { text: ' ', kind: 'space' },
     { text: '1', kind: 'stringLiteral' },
     { text: ' ', kind: 'space' },
     { text: '|', kind: 'punctuation' },
     { text: ' ', kind: 'space' },
     { text: '2', kind: 'stringLiteral' } ],
  documentation: [],
  tags: undefined
})
