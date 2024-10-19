import TextScramble from "@skits/react-text-scramble";
const Title = ({ data }) => {


  return (
    <div className="p-4 text-[#f9d3de] font-semibold h-full fixed bg-transparent flex flex-col z-0">
      <h3 className="text-2xl bg-transparent z-0">{data?.title || ""}</h3>
      <h1 className="text-5xl md:text-7xl lg:text-9xl bg-transparent z-0">
        <TextScramble
          autoStart
          text={data?.name}
          autostart
          characters="abcdeghijklmnopqstuv!@#$%^&*()_+={}[]ST" // Scramble text using numbers only
          scrambleSpeed={100}
          revealText
          revealSpeed={100}
          revealDelay={4}
          revealMode="typewriter"

        />
      </h1>
      <h3 className="text-2xl md:text-4xl bg-transparent flex items-end h-full leading-8 z-0">
        Interaction <br /> Design <br /> Lab <br /> Bern - 19
      </h3>
    </div>
  );
};

export default Title;
