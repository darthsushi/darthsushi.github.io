import './styles.css';

function SceneView({ children, src }) {

  function getImageFormat(filename) {
    const match = filename.match(/\.(\w+)(?:\?.*)?$/i);
  
    return match[1].toLowerCase();
  }

  const isVideo = getImageFormat(src) === 'webm';

  return (
    <>
      <section className="scene">
        { !isVideo && <img src={ src } loading="lazy" /> }
        { isVideo &&
          <video autoPlay loop muted playsInline>
            <source src={ src } type="video/webm" />
            Tu navegador no soporta el formato WebM.
          </video>
        }
        <div className="layer">
          { children }
        </div>
      </section>
    </>
  )
}

export default SceneView
