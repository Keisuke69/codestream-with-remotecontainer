import type { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
// import { newrelic } from "newrelic";

export const getServerSideProps = async () => {
  const url = "https://thatcopy.pw/catapi/rest/";
  const res = await axios.get(url).catch((err) => {
    return err.response;
  });

  const catUrl = await res.data.url;

  const err = new SyntaxError("This is sample error");
  const newrelic = require("newrelic");
  newrelic.noticeError(err);
  
  return {
    props: {
      url: catUrl,
    },
  };
};

const Home = ({ url }: { url: string }) => {
  return (
    <div>
      <Image src={url} alt="cat" layout="fill"></Image>
    </div>
  );
};

export default Home;
