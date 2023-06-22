import { DialogContentProps } from "@mui/material/DialogContent";
import { FC } from "react";
export interface DeleteModalProps extends DialogContentProps {
    deleteFn: () => void;
    title: string;
}
declare const DeleteModal: FC<DeleteModalProps>;
export default DeleteModal;
