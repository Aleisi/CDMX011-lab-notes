import { db } from "./firebase";

export const savingNote= (tittle, note) =>
db.collection("notes").doc().set({
    tittle,
    note,
    date: new Date(),
});

export const showingNote = () => db.collection("notes");

export const getNote = () => db.collection("notes");

export const deleteNote = (id) => db.collection("notes").doc(id).delete();
