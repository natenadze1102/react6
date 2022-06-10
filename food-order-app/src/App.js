import './App.css';

import { Fragment, useState, useContext } from 'react';
import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
// import ModalContext from './Components/store/modalContext';
import { ModalContextProvider } from './Components/store/modalContext';
import { useModalUpdate } from './Components/store/modalContext';

function App() {
  const toggleModal = useModalUpdate();
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const onCloseCart = () => {
    setModalIsOpen(false)
  }
  // const toggler = useContext(ModalContext)
  return (
    <ModalContextProvider>
      {
        toggleModal && <Cart onClick={onCloseCart} />
      }
      <Header />
      <main>
        <Meals />
      </main>

    </ModalContextProvider>
  );
}

export default App;
