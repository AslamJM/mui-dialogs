import { DialogContentProps } from '@mui/material/DialogContent';
import React, { FC } from 'react';
import { DrawerProps } from '@mui/material/Drawer';

interface AddModalProps extends DialogContentProps {
    addFn: () => void;
    title: string;
}
declare const AddModal: FC<AddModalProps>;

interface EditModalProps extends DrawerProps {
    updateFn: () => void;
}
declare const EditModal: FC<EditModalProps>;

interface DeleteModalProps extends DialogContentProps {
    deleteFn: () => void;
    title: string;
}
declare const DeleteModal: FC<DeleteModalProps>;

interface ModalState {
    addModalOpen: boolean;
    editModalOpen: boolean;
    deleteModalOpen: boolean;
    selectedId: string;
    setAddModalOpen: (value: boolean) => void;
    setEditModalOpen: (value: boolean) => void;
    setDeleteModalOpen: (value: boolean) => void;
    setSelectedId: (value: string) => void;
}
declare const useModalContext: () => ModalState;
interface ModalProviderProps {
    children: React.ReactNode;
}
declare const ModalContextProvider: React.FC<ModalProviderProps>;

export { AddModal, DeleteModal, EditModal, ModalContextProvider, useModalContext };
