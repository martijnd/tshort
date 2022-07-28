import type { NextPage } from "next";
import { FormEvent } from "react";

const Home: NextPage = () => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");

    // Logic
  }

  return (
    <div className="h-screen w-full bg-blue-900 flex justify-center flex-col items-center text-white">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="url"
          id="url"
          className="rounded-sm p-2"
          placeholder="Paste an URL"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-200 text-blue-900 font-bold rounded">Shorten</button>
      </form>
    </div>
  );
};

export default Home;
