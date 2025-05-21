import SceneView from "../SceneView";
import LockedwithAd from "../LockedWithAd";
import { CHAPTERS } from "../../../settings";

function getNextChapter(chapterId) {
  const chapterPosition = CHAPTERS.findIndex(({ id }) => id === chapterId) + 1;
  
  return CHAPTERS[chapterPosition];
}

function ChapterView({ chapter }) {
  const nextChaper = getNextChapter(chapter.id);

  if (chapter.locked) {
    return (
      <LockedwithAd chapterId={ chapter.id }>
        <div className={ chapter.class }>
          {
            chapter.scenes.map((scene) => {
              return <SceneView key={ `${chapter.id}-${scene}` } src={ `/novela/${chapter.id}/${scene}` } />
            })
          }
        </div>
        { nextChaper && <ChapterView chapter={ nextChaper } /> }
      </ LockedwithAd>
    )
  }

  return (
    <>
      <div id={ chapter.id } className={ chapter.class }>
        {
          chapter.scenes.map((scene) => {
            return <SceneView key={ `${chapter.id}-${scene}` } src={ `/novela/${chapter.id}/${scene}` } />
          })
        }
      </div>
      { nextChaper && <ChapterView chapter={ nextChaper } /> }
    </>
  )
}

export default ChapterView;