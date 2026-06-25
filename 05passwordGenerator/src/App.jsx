import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}<>?/";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  const copyPassword = () => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
      <div className="w-full max-w-md bg-slate-800 rounded-xl px-6 py-6 text-orange-500">
        <h1 className="text-3xl text-center mb-4 font-bold">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="outline-none w-full py-2 px-3 text-white"
            placeholder="Password"
            readOnly
          />

          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="numbersInput"
              checked={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numbersInput">Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="charactersInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charactersInput">Special Characters</label>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;