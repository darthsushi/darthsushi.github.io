import './Home.css'
import { NavLink } from 'react-router';
import ChapterView from './components/ChapterView';
import { CHAPTERS } from '../settings';
import SceneView from './components/SceneView';


function Home() {
  const chapterOne = CHAPTERS[0];

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
          <img className="w-full max-w-[250px] lg:max-w-[400px] xl:max-w-[450px]" src="/assets/logo.svg" />
          <div className='p-1 md:p-10 flex gap-2 md:gap-4'>
            <a href="#chapter1" className='text-nowrap lg:text-[1.4rem] font-planc px-3 md:px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] active:bg-[#e67ea7] active:text-[white] hover:text-[white] hover:bg-[#e67ea7] cursor-pointer'>Leer novela</a>
            <NavLink className='text-nowrap lg:text-[1.4rem] font-planc px-3 md:px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] active:bg-[#e67ea7] active:text-[white] hover:text-[white] hover:bg-[#e67ea7] cursor-pointer' to="/store">Explorar tienda</NavLink>
          </div>
        </div>
      </section>
      <section className="w-full h-[350px] z-10 flex justify-center items-center lg:h-[550px] bg-[url(/assets/alternative-2.png)] lg:bg-[url(/assets/alternative-2.png)] bg-cover bg-center bg-no-repeat">
        <p className='w-full max-w-[300px] lg:max-w-[600px] font-planc text-[.8rem] leading-[1rem] lg:text-[1rem] lg:leading-[1.5rem] text-justify tracking-[-1px]'>
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
