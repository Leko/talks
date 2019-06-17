import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { dracula } from "react-syntax-highlighter/dist/styles/prism";

export function Code(props) {
  const { children, className } = props;
  const language = props.language || className.replace(/^language-/, '')

  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
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
