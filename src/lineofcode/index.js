import Header from "./Header";
import "./loc.css";
import TextEditor from "./TextEditor";

function LineOfCode() {
  return (
    <div className="LOC flex flex-col h-screen">
      <Header />
      <TextEditor />
      <div
        style={{ backgroundColor: "#242424" }}
        className="flex-1 h-full flex-grow pl-2 loc-mono text-sm Green"
      >
        <p>
          <span>&#62;</span> Console loaded...Type your script above and click
          green start button
        </p>
        <p>
          <span>&#62;</span> |
        </p>
      </div>
    </div>
  );
}

export default LineOfCode;
