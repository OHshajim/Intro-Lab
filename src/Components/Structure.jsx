import Modal from "./Modal";
import { Data } from "../../Public/Data";

const Structure = ({ setData, data }) => {
  return (
    <div className="h-full border-black overflow-hidden">
      <div className="grid grid-cols-3 h-full items-center  gap-5 mx-10">
        {Data.map((intro, index) => (
          <div
            id={intro.title}
            key={index}
            onClick={() => {
                setData(intro);
              document.getElementById("my_modal_3").showModal();
            }}
            className="z-40 w-full h-[35vh] hover:border-8 border border-[#f9d3de] bg-transparent hover:bg-[#0c3a2f] duration-300 group"
          >
            <img
              src={intro.image}
              alt="Shape Image"
              className={`w-full h-full z-50 object-cover group-hover:visible ${
                data.name === intro.name ? "visible" : "invisible"
              }`}
            />
          </div>
        ))}
      </div>
      <Modal data={data} />
    </div>
  );
};

export default Structure;
