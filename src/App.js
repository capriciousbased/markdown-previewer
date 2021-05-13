import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("Enter your Markdown");

  return (
    <div>
      <h2>Convert your Markdown</h2>
      <div className="markdown__container">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div id="preview">
          <ReactMarkdown source={markdown} className="markdown__preview" />
        </div>
      </div>
    </div>
  );
}
