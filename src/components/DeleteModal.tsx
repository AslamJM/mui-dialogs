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

export interface DeleteModalProps extends DialogContentProps {
  deleteFn: () => void;
  title: string;
}

const DeleteModal: FC<DeleteModalProps> = ({ children, title, deleteFn }) => {
  const { deleteModalOpen, setDeleteModalOpen } = useModalContext();
  return (
    <Dialog open={deleteModalOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={() => setDeleteModalOpen(false)}
          color="error"
          variant="outlined"
        >
          cancel
        </Button>
        <Button onClick={deleteFn} color="success" variant="outlined">
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
