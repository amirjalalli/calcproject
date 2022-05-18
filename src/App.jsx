import React, { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Person from "./Component/Person/Person";

function App() {
  const [result, setResult] = useState("");
  const [data, setData] = useState("");

  const handelClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clearHandler = () => {
    setResult("");
    setData("");
  };
  const sliceHandler = () => {
    setResult(result.slice(0, -1));
  };
  const resultdata = () => {
    let final = eval(result);
    setData(final).toString();
  };

  const button = [
    // btn: handelClick(),
    // C: sliceHandler(),
    // "=": resultdata(),
    [
      {
        text: "Clear",
        value: "Clear",
        className: "btnOperator",
        funcKey: clearHandler,
      },
      {
        text: "C",
        value: "C",
        className: "btnOperator",
        funcKey: sliceHandler,
      },
      {
        text: "/",
        value: "/",
        className: "btnOperator",
        funcKey: handelClick,
      },
      {
        text: "-",
        value: "-",
        className: "btnOperator",
        funcKey: handelClick,
      },
    ],
    [
      { text: "7", value: "7", className: "", funcKey: handelClick },
      { text: "8", value: "8", className: "", funcKey: handelClick },
      { text: "9", value: "9", className: "", funcKey: handelClick },
      {
        text: "*",
        value: "*",
        className: "btnOperator",
        funcKey: handelClick,
      },
    ],
    [
      {
        text: "4",
        value: "4",
        className: "",
        funcKey: handelClick,
      },
      {
        text: "5",
        value: "5",
        className: "",
        funcKey: handelClick,
      },
      {
        text: "6",
        value: "6",
        className: "",
        funcKey: handelClick,
      },
      {
        text: "+",
        value: "+",
        className: "btnOperator",
        funcKey: handelClick,
      },
    ],
    [
      {
        text: "1",
        value: "1",
        className: "",
        funcKey: handelClick,
      },
      {
        text: "2",
        value: "2",
        className: "",
        funcKey: handelClick,
      },
      {
        text: "3",
        value: "3",
        className: "",
        funcKey: handelClick,
      },
      {
        text: "=",
        value: "=",
        className: "btnOperator",
        funcKey: resultdata,
      },
    ],
    [
      {
        text: ".",
        value: ".",
        className: "btnOperator",
        funcKey: handelClick,
      },
      { text: "0", value: "0", className: "", funcKey: handelClick },
      {
        text: "(",
        value: "(",
        className: "btnOperator",
        funcKey: handelClick,
      },
      {
        text: ")",
        value: ")",
        className: "btnOperator",
        funcKey: handelClick,
      },
    ],
  ];

  // try{
  //     eval(result)
  // } catch (e){
  //   setResult(Error)
  //   return
  // }

  // const func = {
  //   Clear: clearHandler(),
  //   btn: handelClick(),
  //   C: sliceHandler(),
  //   "=": resultdata(),
  // };
  // const resultdata = () => {
  //   let input = result.join("")
  //   setData(Math.evaulate(input).toString())
  // }

  return (
    <div className="App">
      {/* <div className="container">
        <form className="inputContent">
          <h2>{data}</h2>
          <input type="text" value={result} />
        </form>
        <div className="btnContent">
          <button className="btnOperator " onClick={clearHandler} name="Clear">
            Clear
          </button>
          <button className="btnOperator" onClick={sliceHandler} name="C">
            C
          </button>
          <button onClick={handelClick} className="btnOperator" name="/">
            /
          </button>
          <button onClick={handelClick} className="btnOperator" name="-">
            -
          </button>
          <button onClick={handelClick} name="7">
            7
          </button>
          <button onClick={handelClick} name="8">
            8
          </button>
          <button onClick={handelClick} name="9">
            9
          </button>
          <button onClick={handelClick} className="btnOperator" name="*">
            *
          </button>
          <button onClick={handelClick} name="4">
            4
          </button>
          <button onClick={handelClick} name="5">
            5
          </button>
          <button onClick={handelClick} name="6">
            6
          </button>
          <button onClick={handelClick} className="btnOperator" name="+">
            +
          </button>
          <button onClick={handelClick} name="1">
            1
          </button>
          <button onClick={handelClick} name="2">
            2
          </button>
          <button onClick={handelClick} name="3">
            3
          </button>
          <button onClick={resultdata} className="btnOperator" name="=">
            =
          </button>
          <button onClick={handelClick} className="btnOperator" name=".">
            .
          </button>
          <button onClick={handelClick} name="0">
            0
          </button>
          <button onClick={handelClick} className="btnOperator" name="(">
            (
          </button>
          <button onClick={handelClick} className="btnOperator" name=")">
            )
          </button>
        </div>
      </div> */}
      <div className="container">
        <form className="inputContent">
          <h2>{data}</h2>
          <input type="text" value={result} />
        </form>
        <div className="btnContent">
          {button.map((item) => {
            return item.map((btn, index) => {
              return (
                <button
                  key={index}
                  onClick={btn.funcKey}
                  className={btn.className}
                  name={btn.text}
                >
                  {btn.value}
                </button>
              );
            });
          })}
        </div>
      </div>

      {/* <Person /> */}
    </div>
  );
}

export default App;
