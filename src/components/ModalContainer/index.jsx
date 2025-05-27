function ModalContainer({ children, isOpen }) {
  return isOpen &&
    <div className="w-full h-[100%] fixed flex top-0 left-0 bg-[#0000009e] z-10 p-2 justify-center items-center">
      <div className="w-full max-w-[680px] min-h-[150px] bg-white rounded-2xl p-2 md:p-5 flex flex-col overflow-hidden">
        { children }
      </div>
    </div>
}

export default ModalContainer;