import React, { createContext, useContext, useReducer } from "react";

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

type ModalAction =
  | { type: "SET_ADD"; payload: boolean }
  | { type: "SET_EDIT"; payload: boolean }
  | { type: "SET_DELETE"; payload: boolean }
  | { type: "SET_ID"; payload: string };

const initialState: ModalState = {
  addModalOpen: false,
  editModalOpen: false,
  deleteModalOpen: false,
  selectedId: "",
  setAddModalOpen: () => {
    //
  },
  setEditModalOpen: () => {
    //
  },
  setDeleteModalOpen: () => {
    //
  },
  setSelectedId: () => {
    //
  },
};

const ModalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case "SET_ADD":
      return {
        ...state,
        addModalOpen: action.payload,
      };
    case "SET_EDIT":
      return {
        ...state,
        editModalOpen: action.payload,
      };
    case "SET_DELETE":
      return {
        ...state,
        deleteModalOpen: action.payload,
      };
    case "SET_ID":
      return {
        ...state,
        selectedId: action.payload,
      };
    default:
      return state;
  }
};

const ModalContext = createContext<ModalState | undefined>(undefined);

export const useModalContext = (): ModalState => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalContextProvider: React.FC<ModalProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const setAddModalOpen = (value: boolean) => {
    dispatch({ type: "SET_ADD", payload: value });
  };

  const setEditModalOpen = (value: boolean) => {
    dispatch({ type: "SET_EDIT", payload: value });
  };
  const setDeleteModalOpen = (value: boolean) => {
    dispatch({ type: "SET_DELETE", payload: value });
  };
  const setSelectedId = (value: string) => {
    dispatch({ type: "SET_ID", payload: value });
  };

  const contextValue: ModalState = {
    ...state,
    setAddModalOpen,
    setDeleteModalOpen,
    setEditModalOpen,
    setSelectedId,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
