const Modal = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#f9d3de] text-black rounded-none">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl bg-[#f9d3de] underline-offset-8 underline">Hello!</h3>
          <p className="py-4 bg-[#f9d3de]">Press ESC key or click on ✕ button to close</p>
          <h3 className="font-bold text-2xl bg-[#f9d3de]">Hello!</h3>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
