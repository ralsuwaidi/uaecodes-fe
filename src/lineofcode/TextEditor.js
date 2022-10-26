export default function TextEditor() {
  return (
    <div class="flex px-2 text-sm loc-mono ">
      <div class="text-gray-600 w-1/5">
        {Array.from(Array(25), (e, i) => {
          return <p>{i+1}</p>;
        })}
      </div>
      <div class="text-gray-400 w-4/5 font-thin pl-2">
        <p># Welcome to the uae national day for programmers </p>
        <p>
          # in this software program we will show you how easy it is to write
          your first line of code
        </p>
        <p>
          # anything after the ‘#’ will be ignored by the software, we call
          these comments
        </p>
        <br></br>
        <p className="text-white">
          <span style={{ color: "#ff79c6" }}>import</span> pandas{" "}
          <span style={{ color: "#ff79c6" }}>as</span> pb
        </p>
        <p className="text-white">
          <span style={{ color: "#ff79c6" }}>import</span> pytorch
        </p>
        <p className="text-white">
          <span style={{ color: "#ff79c6" }}>import</span> numpy{" "}
          <span style={{ color: "#ff79c6" }}>as</span> np
        </p>
        <br></br>
        <p>
          # the below is a print statement, it prints what you want to show to
          the console
        </p>
        <br></br>
        <p># add the line you want to print inside the “” marks </p>
        <br></br>
        <p>
          <span style={{ color: "#50fa7b" }}>print</span>
          <span>(</span>
          <span style={{ color: "#f1fa8c" }}>""</span>
          <span>)</span>
        </p>
      </div>
    </div>
  );
}
