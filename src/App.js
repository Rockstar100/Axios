import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";





function App() {

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setMyData(response.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);


  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);


  return (
    <>
      <h1 className="Heading">Axios</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 15).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
