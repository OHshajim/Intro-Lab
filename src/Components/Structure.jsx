import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "./Modal";
gsap.registerPlugin(ScrollTrigger);

const Structure = () => {
  const shapeRef = useRef(null); // Use a ref to target the div for animation

  useEffect(() => {
    gsap.to(shapeRef.current, {
      scrollTrigger: shapeRef.current, // start animation when ".box" enters the viewport
    });
  }, []);

  const images = [
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-1.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-2.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-4.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-4.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-5.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-6.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-7.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-8.jpg",
    "https://atnoyualen.cloudimg.io/width/500/webp/https://2019.iad-lab.ch/uploads/Iad-lab_moodbild-9.jpg",
  ];

  return (
    <div className="h-full border-black p-4 overflow-hidden">
      <div className="grid grid-cols-3 h-full items-center  gap-5 ">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="z-40 w-full h-[32vh] border-8 border-[#f9d3de] bg-transparent hover:bg-[#0c3a2f] duration-300 group"
          >
            <img
              ref={shapeRef}
              src={imageUrl}
              alt="Shape Image"
              className="w-full h-full z-50 object-cover "
            />
          </div>
        ))}
      </div>
      <Modal/>
    </div>
  );
};

export default Structure;
