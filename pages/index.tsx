import type { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [url, setUrl] = useState();

  useEffect(async () => {
    const url = "https://thatcopy.pw/catapi/rest/";
    const res = await axios.get(url);
    setUrl(await res.data.url);
  }, []);

  // throw "Sample Error";
  return (
    <div>
      <img src={url} width="100%"></img>
    </div>
  );
};

export default Home;
