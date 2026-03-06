import { useState } from 'react'
import { StoryView } from './components/StoryView'
import { initialChapterId } from './data/story'

function App() {
  const [chapterId, setChapterId] = useState(initialChapterId)

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200">
      <header className="border-b border-stone-800/80 bg-stone-900/50">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-lg font-semibold text-amber-400/90">
            Interaktive Story
          </h1>
        </div>
      </header>
      <main>
        <StoryView chapterId={chapterId} onChoice={setChapterId} />
      </main>
    </div>
  )
}

export default App
