import { story } from '../data/story'

export function StoryView({ chapterId, onChoice }) {
  const chapter = story[chapterId]
  if (!chapter) return null

  const { title, text, choices } = chapter

  return (
    <article className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-amber-200 mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-stone-300 leading-relaxed text-lg mb-8">{text}</p>

      {choices && choices.length > 0 ? (
        <nav className="space-y-3">
          <p className="text-stone-500 text-sm uppercase tracking-wider mb-4">
            Was tust du?
          </p>
          <ul className="space-y-2">
            {choices.map((choice) => (
              <li key={choice.nextChapterId}>
                <button
                  type="button"
                  onClick={() => onChoice(choice.nextChapterId)}
                  className="w-full text-left px-4 py-3 rounded-lg border border-amber-800/50 bg-amber-950/30 text-amber-100 hover:bg-amber-900/40 hover:border-amber-600/60 transition-colors"
                >
                  {choice.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <p className="text-stone-500 italic">Ende dieses Weges.</p>
      )}
    </article>
  )
}
