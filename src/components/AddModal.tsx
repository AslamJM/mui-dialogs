import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DialogContentProps } from "@mui/material/DialogContent";
import React, { FC } from "react";

import { useModalContext } from "./ModalContext";

export interface AddModalProps extends DialogContentProps {
  addFn: () => void;
  title: string;
}

const AddModal: FC<AddModalProps> = ({ children, addFn, title }) => {
  const { addModalOpen, setAddModalOpen } = useModalContext();

  return (
    <Dialog open={addModalOpen} onClose={() => setAddModalOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent
        sx={(theme) => ({
          width: 500,
          [theme.breakpoints.down("md")]: {
            width: 300,
          },
        })}
      >
        {children}
      </DialogContent>
      <DialogActions
        sx={(theme) => ({
          py: 2,
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
          },
        })}
      >
        <Button
          onClick={() => setAddModalOpen(false)}
          color="error"
          variant="outlined"
        >
          Cancel
        </Button>
        <Button onClick={addFn} color="success" variant="outlined">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModal;
