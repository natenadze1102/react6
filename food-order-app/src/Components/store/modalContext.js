
import React, { useState, useContext } from 'react';
const ModalContext = React.createContext({
    modalIsOpen: false,
});
const ModalUpdateContext = React.createContext();

export function useModal() {
    return useContext(ModalContext)
}

export function useModalUpdate() {
    return useContext(ModalUpdateContext)
}

export const ModalContextProvider = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(true);
        console.log(modalIsOpen)
        return modalIsOpen;
    }

    return (
        <ModalContext.Provider value={modalIsOpen}>
            <ModalUpdateContext.Provider value={toggleModal}>
                {props.children}
            </ModalUpdateContext.Provider>
        </ModalContext.Provider>
    )
}

export default ModalContext;

