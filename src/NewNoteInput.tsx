import React, { ChangeEvent, FC, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

 const onAddNoteClick= ()=>{
    addNote(note)
    setNote("")
 }

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        id="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};

export default NewNoteInput;
