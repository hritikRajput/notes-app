import React, { useContext, createContext } from "react";

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [notes, setNotes] = React.useState([]);

  return (
    <NotesContext.Provider
      value={{ title, setTitle, description, setDescription, notes, setNotes }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
