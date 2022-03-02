import { useState } from "react";
import "./App.css";

function App() {
  const [phrase, setPhrase] = useState("");

  if (phrase === "open sesame") {
    alert("YOU MAY ENTER BRO");
  }
  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <p>{phrase}</p>
      <input
        type="text"
        value={phrase}
        placeholder="Super duper secret"
        onChange={(e) => setPhrase(e.target.value)}
      />
      <p>
        Hint: It's <strong>open sesame</strong>
      </p>
    </div>
  );
}

export default App;
