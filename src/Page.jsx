import Nav from "./Components/Nav";
import Structure from "./Components/Structure";
import Title from "./Components/Title";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Title />
      <div className=" h-[50vh]"></div>
      <Structure />
    </div>
  );
};

export default Page;
