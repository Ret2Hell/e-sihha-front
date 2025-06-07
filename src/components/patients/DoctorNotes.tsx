import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Save, X } from "lucide-react";
import { motion } from "framer-motion";

export default function DoctorNotes({
  notes,
  isEditingNotes,
  newNote,
  onNewNoteChange,
  onStartEditing,
  onSaveNote,
  onCancelEditing,
}: DoctorNotesProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Doctor Notes</CardTitle>
        <Button variant="outline" size="sm" onClick={onStartEditing}>
          <Plus className="h-4 w-4 mr-2" />
          Add Note
        </Button>
      </CardHeader>
      <CardContent>
        {isEditingNotes && (
          <div className="mb-4 p-4 border rounded-lg bg-gray-50">
            <Label htmlFor="new-note">Add New Note</Label>
            <Textarea
              id="new-note"
              value={newNote}
              onChange={(e) => onNewNoteChange(e.target.value)}
              placeholder="Enter your note here..."
              className="mt-2"
              rows={3}
            />
            <div className="flex gap-2 mt-3">
              <Button size="sm" onClick={onSaveNote}>
                <Save className="h-4 w-4 mr-2" />
                Save Note
              </Button>
              <Button variant="outline" size="sm" onClick={onCancelEditing}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        )}
        <div className="space-y-3">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500"
            >
              <div className="text-sm">{note}</div>
              <div className="text-xs text-muted-foreground mt-2">
                {new Date().toLocaleDateString()} • Dr. Johnson
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
