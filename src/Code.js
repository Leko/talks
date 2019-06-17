import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function Code(props) {
  const { children, language } = props;
  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      customStyle={{
        textAlign: 'left',
        flex: 1,
        marginTop: 0,
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}
