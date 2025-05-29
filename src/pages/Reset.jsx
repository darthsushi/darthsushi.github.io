import { useAltair } from "../context/app.context"

function Reset() {
  const { cleanCache } = useAltair();

  function clean() {
    cleanCache();

    window.location.href = '/';
  }


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button onClick={ clean } className="text-nowrap lg:text-[1.3rem] font-planc px-3 md:px-8 rounded-full bg-[#e67ea7] text-[white] cursor-pointer">
        Reset All
      </button>
    </div>
  )
}

export default Reset