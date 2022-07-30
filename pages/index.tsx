import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Home: NextPage = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<string|null>(null);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit");

    // Logic
    const res = await fetch("/api/save-url", {
      method: "post",
      body: JSON.stringify({
        url,
      }),
    });
    const urlId = await res.json();

    setResult(`${window.origin}/w/${urlId.url}`);
  }

  return (
    <div className="h-screen w-full bg-blue-900 flex justify-center flex-col items-center text-white">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="url"
          id="url"
          onChange={(e) => setUrl(e.target.value)}
          className="rounded-sm p-2 text-black"
          placeholder="Paste an URL"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-200 text-blue-900 font-bold rounded"
        >
          Shorten
        </button>
      </form>
      {result && (
        <div>
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Home;
