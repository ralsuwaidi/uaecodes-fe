import Header from "./Header";
import "./loc.css";
import TextEditor from "./TextEditor";
import "react-tiny-fab/dist/styles.css";
import { Fab, Action } from "react-tiny-fab";
import { MdPlayArrow, MdHelp, MdAdd } from "react-icons/md";

function LineOfCode() {
  return (
    <div className="LOC flex flex-col h-screen">
      <Fab
        icon={<MdAdd color="white" size={20} />} // main icon
        alwaysShowTitle={true} // always show color
        event="hover"
        style={{ right: 15, bottom: 95, width: 35, height: 35 }} // location
        mainButtonStyles={{ backgroundColor: "gray", width: 35, height: 35 }}
      >
        <Action text="Email" 
        style={{ backgroundColor: "gray", width: 35, height: 35 }}
        />
        <Action text="Help"
        style={{ backgroundColor: "gray", width: 35, height: 35 }}
        >
          <MdHelp />
        </Action>
      </Fab>

      <Fab
        icon={<MdPlayArrow color="green" size={30} />} // main icon
        alwaysShowTitle={true} // always show color
        event="click"
        style={{ right: 5, bottom: 24 }} // location
        mainButtonStyles={{ backgroundColor: "lime" }}
        onClick={() => console.log("Here is the action of FAB.")}
        ></Fab>

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
