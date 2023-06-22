import React from "react";
export interface ModalState {
    addModalOpen: boolean;
    editModalOpen: boolean;
    deleteModalOpen: boolean;
    selectedId: string;
    setAddModalOpen: (value: boolean) => void;
    setEditModalOpen: (value: boolean) => void;
    setDeleteModalOpen: (value: boolean) => void;
    setSelectedId: (value: string) => void;
}
export declare const useModalContext: () => ModalState;
export interface ModalProviderProps {
    children: React.ReactNode;
}
export declare const ModalContextProvider: React.FC<ModalProviderProps>;
