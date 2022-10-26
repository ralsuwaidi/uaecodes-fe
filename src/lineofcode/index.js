import Header from "./Header";
import "./loc.css";
import TextEditor from "./TextEditor";
import "react-tiny-fab/dist/styles.css";
import { Fab, Action } from "react-tiny-fab";
import { MdPlayArrow, MdHelp, MdAdd } from "react-icons/md";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import MatrixCard from "matrix-card";

function LineOfCode() {
  const [console, setConsole] = useState(
    "Console loaded...Type your script above and click green play button"
  );


  return (
    <div className="LOC flex flex-col h-screen">
      <Fab
        icon={<MdAdd color="white" size={20} />} // main icon
        alwaysShowTitle={true} // always show color
        event="hover"
        style={{ right: 15, bottom: 95, width: 35, height: 35 }} // location
        mainButtonStyles={{ backgroundColor: "gray", width: 35, height: 35 }}
      >
        <Action
          text="Email"
          style={{ backgroundColor: "gray", width: 35, height: 35 }}
        />
        <Action
          text="Help"
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
        onClick={() => setConsole("Your function has beeen printed")}
      ></Fab>

      <Header />
      <TextEditor />
      <div
        style={{ backgroundColor: "#242424" }}
        className="flex-1 h-full flex-grow pl-2 loc-mono text-sm Green"
      >
        <div className="w-full">
          <MatrixCard
            id={"my-id-1"}
            matrixText={"UAE CODES"}
            canvasSize={{ width: '900', height: '300' }}
            delay={40}
            backgroundColor={"rgba(42, 40, 45, 0.2)"}
            textFontSize={"16"}
            textMainColor={"#A9A9A9"}
            textAlternateColorRatio={0.1}
            textAlternateColorList={[
              "#808080",
              "#989898",
              "#A9A9A9",
              "#C0C0C0",
            ]}
            styleOverrideForChildrenDiv={{ "background-color": "transparent", "top": "0px", "margin": "0px", "padding": "0px", "left": "0px" }}
          >
            <div>
              <Typewriter
                options={{
                  strings: [">> " + console],
                  autoStart: true,
                }}
              />
              </div>
          </MatrixCard>
        </div>
      </div>
    </div>
  );
}

export default LineOfCode;
