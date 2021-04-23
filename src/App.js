import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import "./styles.css";

export default function App() {
  const [markdown, setMarkdown] = useState("Heading");

  return (
    <div className="markdown__container">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <ReactMarkdown source={markdown} className="markdown__preview" />
    </div>
  );
}
