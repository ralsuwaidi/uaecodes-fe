import Header from "./Header";
import "./loc.css";
import TextEditor from "./TextEditor";
import "react-tiny-fab/dist/styles.css";
import { Fab, Action } from "react-tiny-fab";
import { MdPlayArrow } from "react-icons/md";

function LineOfCode() {
  return (
    <div className="LOC flex flex-col h-screen">
      <Fab
        icon={<MdPlayArrow />}
        alwaysShowTitle={true}
      >
        // The Action components are the "buttons" that appear when the Fab is
        open. You can use the out-of-the-box Action // component or you can use
        a custom component of any type and style it any way that you'd like. The
        "text" prop // is the popup label that appears when the Action component
        is hovered.
        <Action text="Email" />
        <Action text="Help">
          <i className="fa fa-help" />
        </Action>
        // Using a custom component for this one. See another example in
        "example/src/index.js"
      </Fab>
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
