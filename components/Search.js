import react, { useEffect, useState } from "react";

function Search({ results }) {
  const [topic, setTopic] = useState("");
  let answer = results;
  const [response, setResponse] = useState(answer);
  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = results.filter((res) => res.Topic == topic);
    console.log(result);
    result.length > 0
      ? setResponse(result)
      : alert("This Topic is Not available or Incorrect");
  };
  //get all by group function
  const getGroup = (type) => results.filter((res) => res.Group == type);
  // get all by group level
  const getLevel = (type) => results.filter((res) => res.Level == type);

  return (
    <>
      <div className="grid w-full">
          <h1 className="text-center text-4xl pt-7">9ijakids Game List</h1>
        <form onSubmit={handleSubmit} className="grid relative my-8">
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            placeholder="search"
            className=" rounded-full w-2/3 mx-auto my-5 mt-9 bg-purple-700px-3 px-4 py-2"
          />
          <input type="submit" hidden className=" " />
        </form>
        <div className="grid grid-cols-5 w-2/3 md:grid-cols-5 md:w-2/3 text-sm mx-auto gap-4">
          <button
            onClick={() => {
              answer = results;
              setResponse(answer);
            }}
            className="rounded-full cursor-pointer hover:opacity-50 border py-1"
          >
            All
          </button>
          <button
            onClick={() => {
              answer = getGroup("Academic");
              setResponse(answer);
            }}
            className=" rounded-full cursor-pointer hover:opacity-50 border py-1"
          >
            Academic
          </button>
          <button
            onClick={() => {
              answer = getGroup("Financial Literacy");
              setResponse(answer);
            }}
            className="rounded-full cursor-pointer hover:opacity-50 pointer border px-2 py-1"
          >
            Financial Literacy
          </button>
          <button
            onClick={() => {
              answer = getLevel("Key Stage 1");
              setResponse(answer);
            }}
            className=" rounded-full cursor-pointer hover:opacity-50 border py-1"
          >
            Level 1
          </button>
          <button
            onClick={() => {
              answer = getLevel("Key Stage 2");
              setResponse(answer);
            }}
            className=" rounded-full cursor-pointer hover:opacity-50 border py-1"
          >
            Level 2
          </button>
        </div>

        <table className="table-auto text-sm w-2/3 mx-auto md:w-2/3 m-5 border">
          <thead>
            <tr>
              <th className="border">Title</th>
              <th className="border">Description</th>
              <th className="border">Image</th>
            </tr>
          </thead>
          <tbody>
            {response.map((result, id) => (
              <tr key={id}>
                <td className="border px-2">{result.GameTitle}</td>
                <td className="border px-2">{result.GameDescription}</td>
                <td className="border px-2">{<img className="w-48 rounded- mx-auto"src={result.GameImage} alt="" />}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
}

export default Search;
