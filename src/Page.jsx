import { useState } from "react";
import Nav from "./Components/Nav";
import Structure from "./Components/Structure";
import Title from "./Components/Title";
import { Data } from "../Public/Data";

const Page = () => {
  const [data, setData] = useState(Data[0]);

  return (
    <div className="min-h-screen">
      <Nav setData={setData} />
      <Title data={data} />
      <div className=" h-[50vh]"></div>
      <Structure setData={setData} data={data} />
    </div>
  );
};

export default Page;
