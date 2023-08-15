import React, { useContext, useEffect, createContext } from "react";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [pinnedNotes, setPinnedNotes] = React.useState(JSON.parse(localStorage.getItem('pinnedNotes')) || []);
  const [archiveNotes, setArchiveNotes] = React.useState(JSON.parse(localStorage.getItem('archiveNotes')) || []);
  const [importantNotes, setImportantNotes] = React.useState(JSON.parse(localStorage.getItem('importantNotes')) || []);
  const [deletedNotes, setDeletedNotes] = React.useState(JSON.parse(localStorage.getItem('deletedNotes')) || []);

  // Update localStorage whenever the relevant state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('pinnedNotes', JSON.stringify(pinnedNotes));
  }, [pinnedNotes]);

  useEffect(() => {
    localStorage.setItem('archiveNotes', JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  useEffect(() => {
    localStorage.setItem('importantNotes', JSON.stringify(importantNotes));
  }, [importantNotes]);

  useEffect(() => {
    localStorage.setItem('deletedNotes', JSON.stringify(deletedNotes));
  }, [deletedNotes]);


  return (
    <NotesContext.Provider
      value={{ title, setTitle, description, setDescription, notes, setNotes, pinnedNotes, setPinnedNotes, archiveNotes, setArchiveNotes, importantNotes, setImportantNotes, deletedNotes, setDeletedNotes }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
