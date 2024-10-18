import Nav from "./Components/Nav";
import Title from "./Components/Title";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Title />
      <div className=" h-96 text-4xl">
        Hello
      </div>
      <div className=" h-96">
        Hello
      </div>
      <div className=" h-96">
        Hello
      </div>
    </div>
  );
};

export default Page;
