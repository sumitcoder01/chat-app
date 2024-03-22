import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ReactNode } from "react";

export type DialogModalProps = {
  title: string;
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export default function DialogModal({ title, open, handleClose, children }: DialogModalProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
