export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id === parseInt(folderId, 10))

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id === parseInt(noteId, 10))

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === parseInt(folderId, 10))
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId === parseInt(folderId, 10)).length