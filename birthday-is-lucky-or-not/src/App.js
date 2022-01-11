import { useState } from "react";
import "./styles.css";

export default function App() {
  const [dob, setDob] = useState(null);
  const [lucky, setLucky] = useState(null);
  const [final, setFinal] = useState("");
  function luckyHandler(e) {
    setLucky(e.target.value);
    console.log(typeof lucky);
  }
  function Date1(e) {
    setDob(e.target.value);
    console.log(dob);
  }
  function btnclick() {
    var all = dob.replaceAll("-", "0");
    var all = [...all];

    var total = all.reduce((sum, i) => {
      return sum + parseInt(i);
    }, 0);
    if (total % lucky == 0) {
      setFinal("you are lucky");
    } else {
      setFinal("you are not lucky");
    }
  }
  return (
    <div className="App">
      <header>
        Is your Birthday Lucky? <span>🤔</span>
      </header>

      <h1
        style={{
          fontSize: "2rem"
        }}
      >
        Date Of Birth:
      </h1>
      <input
        type="date"
        onChange={Date1}
        style={{ width: "10rem", height: "1rem", padding: "1rem" }}
      />
      <br />
      <h1 style={{ fontSize: "2rem" }}>Lucky Number:</h1>
      <input
        placeholder="Enter a number"
        onChange={luckyHandler}
        style={{ width: "10rem", height: "1rem", padding: "1rem" }}
      />
      <br />
      <div className="final">{final}</div>
      <button
        style={{ marginTop: "1rem", height: "3rem", width: "8rem" }}
        onClick={btnclick}
      >
        Check number
      </button>
    </div>
  );
}
