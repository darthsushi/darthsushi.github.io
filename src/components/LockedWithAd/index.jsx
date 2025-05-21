import { useEffect } from "react";
import { useState } from "react";
import SceneView from "../SceneView";
import ModalContainer from "../ModalContainer";

function setCache(key, value, ttlMinutes = 15) {
  const now = Date.now();
  const item = {
    value,
    expiry: now + ttlMinutes * 60 * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

function getCache(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = Date.now();

  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

function getRandomAd() {
  const ads = ['/ads/1.mp4', '/ads/2.mp4']
  const index = Math.floor(Math.random() * ads.length);

  return ads[index];
}

function ModalUnlockChapter({ setIsUnlockOpen, setIsVideoAd }) {
  return (
    <>
      <div className="w-full flex justify-end">
        <img src="assets/close.svg" onClick={ () => setIsUnlockOpen(false) } className="w-[10px] md:w-[25px] cursor-pointer" />
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <h2>Imagen/Texto titulo</h2>
        <p className="text-center w-full max-w-[500px] font-planc leading-4 text-[1rem] md:text-[1.4rem] md:leading-6">
          Desbloquea el siguiente capitulo con un video (Ads) o compra la novela completa para tener acceso total.
        </p>
        <div className='py-5 flex gap-2 md:gap-4'>
          <button onClick={ () => setIsVideoAd(true) } className='text-nowrap font-planc px-8 py-1 rounded-full bg-[#e67ea7] text-white hover: cursor-pointer'>Ver video (ads)</button>
          <button className='text-nowrap font-planc px-8 py-1 rounded-full bg-[#e67ea7] text-white hover: cursor-pointer'>Comprar novela</button>
        </div>
      </div>
    </>
  )
}

function LockedScreen({ chapterId, setIsUnlockOpen }) {
  return (
    <SceneView src={ `/novela/${chapterId}/locked.webp` } >
      <div className="w-full h-full bg-[#220d40d6] flex justify-center items-center gap-5 flex-col">
        <img className="w-full max-w-[35px]! md:max-w-[100px]!" src="assets/candado.svg" />
        <div onClick={ () => setIsUnlockOpen(true) } className="font-planc text-white text-[.9rem] md:text-[1.5rem] lg:text-[1.8rem] cursor-pointer bg-transparent border-b-1 border-white">
          ¿Quieres continuar con la experiencia?
        </div>
      </div>
    </SceneView>
  )
}

function LockedwithAd({ children, chapterId }) {
  const [isLocked, setIsLocked] = useState(true);
  const [isUnlockOpen, setIsUnlockOpen] = useState(false);
  const [isVideoAd, setIsVideoAd] = useState(false);
  const ad = getRandomAd();

  const handleAdFinished = () => {
    setIsVideoAd(false);
    setIsUnlockOpen(false);
    setIsLocked(false);
    setCache(chapterId, true);
  }

  useEffect(() => {
    const isBookUnlocked = getCache('isBookUnlocked');
    const isChapterUnlocked = isBookUnlocked ? true : getCache(chapterId);

    setIsLocked(!isChapterUnlocked)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isLocked ? <>
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