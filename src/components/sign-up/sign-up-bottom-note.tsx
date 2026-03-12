import { signUpBottomNote } from "./content"

function SignUpBottomNote() {
  const NoteIcon = signUpBottomNote.icon

  return (
    <div className="flex items-center justify-center gap-2 text-center">
      <NoteIcon aria-hidden className="size-4 text-primary" />
      <p className="text-xs text-text-tertiary">{signUpBottomNote.text}</p>
    </div>
  )
}

export { SignUpBottomNote }
