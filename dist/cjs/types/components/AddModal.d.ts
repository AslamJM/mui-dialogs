import { DialogContentProps } from "@mui/material/DialogContent";
import { FC } from "react";
export interface AddModalProps extends DialogContentProps {
    addFn: () => void;
    title: string;
}
declare const AddModal: FC<AddModalProps>;
export default AddModal;
