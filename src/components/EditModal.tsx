import { Box, Button, Divider, Drawer } from "@mui/material";
import { DrawerProps } from "@mui/material/Drawer";
import React, { FC } from "react";

import { useModalContext } from "./ModalContext";

export interface EditModalProps extends DrawerProps {
  updateFn: () => void;
}

const EditModal: FC<EditModalProps> = ({ children, updateFn }) => {
  const { editModalOpen, setEditModalOpen } = useModalContext();
  return (
    <Drawer
      anchor="right"
      role="form"
      open={editModalOpen}
      onClose={() => setEditModalOpen(false)}
    >
      {children}
      <Divider />
      <Box
        sx={(theme) => ({
          py: 1,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            justifyContent: "center",
          },
        })}
      >
        <Button
          variant="outlined"
          onClick={updateFn}
          sx={{
            mx: 1,
          }}
          color="primary"
        >
          Update
        </Button>
        <Button
          variant="outlined"
          onClick={() => setEditModalOpen(false)}
          sx={{
            mx: 1,
          }}
          color="error"
        >
          Cancel
        </Button>
      </Box>
    </Drawer>
  );
};

export default EditModal;
