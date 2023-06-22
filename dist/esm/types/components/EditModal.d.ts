import { DrawerProps } from "@mui/material/Drawer";
import { FC } from "react";
export interface EditModalProps extends DrawerProps {
    updateFn: () => void;
}
declare const EditModal: FC<EditModalProps>;
export default EditModal;
