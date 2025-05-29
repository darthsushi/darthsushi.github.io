import './Home.css'
import { NavLink } from 'react-router';
import ChapterView from './components/ChapterView';
import { CHAPTERS } from '../settings';


function Home() {
  const chapterOne = CHAPTERS[0];

  return (
    <>
      <section id="home" className="w-full flex flex-col justify-center items-center h-screen min-h-screen bg-cover bg-center bg-no-repeat bg-[url(/assets/mobile/stars_bg.png)] xl:bg-[url(/assets/desktop/stars_bg.png)]">
        <img className="w-full max-w-[250px] lg:max-w-[400px] xl:max-w-[450px]" src="/assets/logo.svg" />
        <div className='p-1 md:p-10 flex gap-2 md:gap-4'>
          <a href="#chapter1" className='text-nowrap lg:text-[1.4rem] font-planc px-3 md:px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] active:bg-[#e67ea7] active:text-[white] hover:text-[white] hover:bg-[#e67ea7] cursor-pointer'>Leer novela</a>
          <NavLink className='text-nowrap lg:text-[1.4rem] font-planc px-3 md:px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] active:bg-[#e67ea7] active:text-[white] hover:text-[white] hover:bg-[#e67ea7] cursor-pointer' to="/store">Explorar tienda</NavLink>
        </div>
      </section>
      <section className="w-full h-[350px] z-10 flex justify-center items-center lg:h-[550px] bg-[url(/assets/alternative-2.png)] lg:bg-[url(/assets/alternative-2.png)] bg-cover bg-center bg-no-repeat">
        <p className='w-full max-w-[300px] lg:max-w-[600px] font-planc text-[1rem] leading-[1rem] lg:text-[1.4rem] lg:leading-[1.6rem] text-justify tracking-[-1px]'>
          <b>Cartas a Altair</b> sigue a Itara, una chica que siempre sintió que su futuro estaba predeterminado hasta
          que descubre la ingeniería. Con dudas pero con mayor curiosidad, se une a Altair Dynamics, un equipo de
          chicas decididas a innovar. Sin apoyo institucional y ante un entorno desafiante, debe elegir entre seguir
          el camino esperado o forjar su propio destino.
        </p>
      </section>
      <ChapterView chapter={ chapterOne } />
    </>
  )
}

export default Home
