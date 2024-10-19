const Modal = ({data}) => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="max-w-5xl modal-box bg-[#f9d3de] text-black rounded-none">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost border-none absolute right-2 top-2 ">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl bg-[#f9d3de] underline-offset-8 underline">{data.name}</h3>
          <p className="py-4 bg-[#f9d3de]">{data.subtitle  || ""}</p>
          <h3 className="font-bold text-2xl bg-[#f9d3de]">{data.description}</h3>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
