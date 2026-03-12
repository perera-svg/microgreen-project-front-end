import { signInBottomNote } from "./content"

function SignInBottomNote() {
  const NoteIcon = signInBottomNote.icon

  return (
    <div className="flex items-center justify-center gap-2 text-center">
      <NoteIcon aria-hidden className="size-4 text-primary" />
      <p className="text-xs text-text-tertiary">{signInBottomNote.text}</p>
    </div>
  )
}

export { SignInBottomNote }
