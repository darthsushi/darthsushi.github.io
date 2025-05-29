import { NavLink } from 'react-router';
import { MERCH } from '../../settings';
import { useAltair } from '../context/app.context';

function Store() {
  const { setIsDrawerOpen } = useAltair();

  return (
    <>
      <section id="home" className="home-scree">
        <video className="hidden md:block" autoPlay loop muted playsInline>
          <source src="/assets/desktop/banner.webm" type="video/webm" />
          Tu navegador no soporta el formato WebM.
        </video>
        <video className="block md:hidden" autoPlay loop muted playsInline>
          <source src="/assets/mobile/banner.webm" type="video/webm" />
          Tu navegador no soporta el formato WebM.
        </video>
        <div className="layer flex flex-col justify-center items-center">
          <img className="w-full max-w-[350px] lg:max-w-[550px] xl:max-w-[750px]" src="/assets/store_title.svg" />
          <div className='p-10 flex gap-2 md:gap-4'>
            <NavLink className='text-nowrap lg:text-[1.4rem] font-planc px-3 md:px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:text-[white] hover:bg-[#e67ea7] active:bg-[#e67ea7] active:text-[white] cursor-pointer' to="/">Ir al inicio</NavLink>
            <button onClick={ () => setIsDrawerOpen(true) } className='text-nowrap lg:text-[1.4rem] font-planc px-3 md:px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:text-[white] hover:bg-[#e67ea7] active:bg-[#e67ea7] active:text-[white] cursor-pointer'>Ver carrito</button>
          </div>
        </div>
      </section>
      <div className="relative w-full h-[200px] bg-cover bg-top bg-no-repeat bg-[url(/assets/paper_onli.png)] z-10" />
      <section className="relative *:w-full min-h-screen bg-[url(/assets/textura.png)] pb-[150px] mt-[-2px]">
        <div className="w-full m-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-3">
          {
            MERCH.map((product) => {
              return <div key={ product.id } className="col-span-1 p-2">
                <div className="w-full overflow-hidden">
                  <img className="w-full" src={ `/products/${product.photos[0]}` } />
                </div>
                <div className="w-full pt-1 flex flex-col items-center">
                  <span className="font-planc my-1 text-[1.4rem] md:text-[1.6rem] text-center leading-6">
                    { product.name }
                  </span>
                  <span className="font-planc text-[1rem] md:text-[1.2rem] text font-planc-thin my-2">
                    ${ product.price   } MXN
                  </span>
                  <NavLink
                    className='text-nowrap font-planc px-8 rounded-full border-1 active:bg-[#e67ea7] active:text-[white] text-[#e67ea7] border-[#e67ea7] hover:text-[white] hover:bg-[#e67ea7] cursor-pointer'
                    to={ `/store/${product.id}` }>
                    Comprar
                  </NavLink>
                </div>
              </div>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Store
