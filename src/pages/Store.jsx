import { NavLink } from 'react-router';
import { MERCH } from '../../settings';

function Store() {
  /* const chapterOne = CHAPTERS[0];
 */
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center h-screen min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/assets/mobile/stars_bg.png)] xl:bg-[url(/assets/desktop/stars_bg.png)]">
        <img className="w-full max-w-[350px] lg:max-w-[550px] xl:max-w-[750px]" src="/assets/store_title.svg" />
        <div className='p-10 flex gap-2 md:gap-4'>
          <NavLink className='text-nowrap font-planc px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:text-[black] hover:bg-[#e67ea7] cursor-pointer' to="/">Ir al inicio</NavLink>
          <button className='text-nowrap font-planc px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:text-[black] hover:bg-[#e67ea7] cursor-pointer'>Ver carrito</button>
        </div>
      </section>
      <div className="relative w-full h-[200px] bg-cover bg-top bg-no-repeat bg-[url(/assets/paper_onli.png)] z-10" />
      <section className="relative *:w-full min-h-screen bg-[url(/assets/paper.svg)] pb-[150px] mt-[-2px]">
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
                    className='text-nowrap font-planc px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:text-[white] hover:bg-[#e67ea7] cursor-pointer'
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
