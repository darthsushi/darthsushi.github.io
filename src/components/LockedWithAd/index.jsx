import { useState } from "react";
import { NavLink } from "react-router"
import SceneView from "../SceneView";
import ModalContainer from "../ModalContainer";
import { useAltair } from "../../context/app.context";

function getRandomAd() {
  const ads = ['/ads/1.mp4', '/ads/2.mp4']
  const index = Math.floor(Math.random() * ads.length);

  return ads[index];
}

function ModalUnlockChapter({ setIsUnlockOpen, setIsVideoAd }) {
  return (
    <>
      <div className="w-full flex justify-end px-2">
        <img src="assets/close.svg" onClick={ () => setIsUnlockOpen(false) } className="w-[15px] md:w-[20px] cursor-pointer" />
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <img src="/assets/adtitle.svg" className="w-full max-w-[200px] md:max-w-[350px] my-4" /> 
        <p className="text-center w-full max-w-[500px] font-planc leading-4 text-[1rem] md:text-[1.3rem] md:leading-6">
          Desbloquea el siguiente capitulo con un video (Ads) o compra la novela completa para tener acceso total.
        </p>
        <div className='py-5 flex gap-2 md:gap-4'>
          <button onClick={ () => setIsVideoAd(true) } className='text-nowrap text-[.8rem] md:text-[1rem] font-planc px-8 py-1 rounded-full bg-[#e67ea7] text-white hover: cursor-pointer'>Ver video (Ads)</button>
          <NavLink
            className='text-nowrap font-planc px-8 py-1 rounded-full bg-[#e67ea7] md:text-[1rem] text-[.8rem] text-white hover: cursor-pointer'
            to='/store/00000'>
            Comprar novela
          </NavLink>
        </div>
      </div>
    </>
  )
}

function LockedScreen({ chapterId, setIsUnlockOpen }) {
  return (
    <SceneView src={ `/novela/${chapterId}/locked.webp` } >
      <div className="w-full h-full bg-[#220d40d6] flex justify-center items-center gap-2 flex-col relative">
        <div className="absolute w-[150px] h-[50px] top-0 left-0 flex justify-center items-center">
          <a href="#home" className="flex gap-2">
            <img className="w-[20px]" src="/assets/up.svg" alt="Ir al inicio" />
            <span className="text-white text-[.9rem]">Ir al inicio</span>
          </a>
        </div>
        <img className="w-full max-w-[30px]! md:max-w-[60px]!" src="assets/candado.svg" />
        <div onClick={ () => setIsUnlockOpen(true) } className="font-planc text-white text-[.9rem] md:text-[1.3rem] cursor-pointer bg-transparent border-b-1 border-white">
          ¿Quieres continuar con la experiencia?
        </div>
      </div>
    </SceneView>
  )
}

function LockedwithAd({ children, chapterId }) {
  const { isBookUnlucked, isChapterUnlocked, unlockChapterTemporaly } = useAltair();
  const [isLocked, setIsLocked] = useState(!isChapterUnlocked(chapterId));
  const [isUnlockOpen, setIsUnlockOpen] = useState(false);
  const [isVideoAd, setIsVideoAd] = useState(false);
  const ad = getRandomAd();

  const handleAdFinished = () => {
    setIsVideoAd(false);
    setIsUnlockOpen(false);
    setIsLocked(false);
    unlockChapterTemporaly(chapterId);
  }

  return isLocked && !isBookUnlucked ? <>
    <LockedScreen chapterId={ chapterId } setIsUnlockOpen={ setIsUnlockOpen } />
    <ModalContainer isOpen={ isUnlockOpen }>
      { !isVideoAd ? <ModalUnlockChapter setIsVideoAd={ setIsVideoAd } setIsUnlockOpen={ setIsUnlockOpen } /> :
        <div className="w-full p-2">
          <video
            className="w-full h-auto rounded-xl shadow-lg"
            autoPlay
            muted
            playsInline
            onEnded={ handleAdFinished }
          >
            <source src={ ad } type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </div>
      }
    </ModalContainer>
  </> : children;
}

export default LockedwithAd