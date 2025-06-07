"use client";

import { useState } from "react";

interface UsePatientNotesReturn {
  isEditingNotes: boolean;
  newNote: string;
  notes: string[];
  handleStartEditing: () => void;
  handleAddNote: () => void;
  handleCancelEditing: () => void;
  setNewNote: (note: string) => void;
}

export function usePatientNotes(
  initialNotes: string[] = []
): UsePatientNotesReturn {
  const [isEditingNotes, setIsEditingNotes] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState(initialNotes);

  const handleStartEditing = () => {
    setIsEditingNotes(true);
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([newNote, ...notes]);
      setNewNote("");
      setIsEditingNotes(false);
    }
  };

  const handleCancelEditing = () => {
    setIsEditingNotes(false);
    setNewNote("");
  };

  return {
    isEditingNotes,
    newNote,
    notes,
    handleStartEditing,
    handleAddNote,
    handleCancelEditing,
    setNewNote,
  };
}
