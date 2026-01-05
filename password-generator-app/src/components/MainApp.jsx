import React, { useCallback, useEffect, useRef, useState } from "react";

export const MainApp = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "!@#$%^&*()_+{}|:<>?-=[];',./`~";
    for (let i = 0; i <= length; i++) {
      let n = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(n);
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed]);

  const passwordReference = useRef(null);
  const clickToCopyInClipboard = useCallback(() => {
    passwordReference.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <h1 className="text-4xl text-center text-white">
        Password Generator App
      </h1>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <div className="flex shadow rounded-lg  overflow-hidden mb-4">
          {/* password and copy button content will go here */}
          <input
            type="text"
            className=" outline-none w-full py-1 px-3"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordReference}
          />
          <button
            className=" outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0"
            onClick={clickToCopyInClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          {/* select deselect option for range, character, and special character content will go here */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={5}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numAllow"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numAllow">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charAllow"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllow">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};
