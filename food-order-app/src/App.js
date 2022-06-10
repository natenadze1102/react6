import './App.css';

import { Fragment, useState, useContext } from 'react';
import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
// import ModalContext from './Components/store/modalContext';
import { ModalContextProvider } from './Components/store/modalContext';
import ModalContext from './Components/store/modalContext';
import { useModalUpdate } from './Components/store/modalContext';

function App() {
  const toggleModal = useModalUpdate();
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const ctx = useContext(ModalContext)

  const onCloseCart = () => {
    setModalIsOpen(false)
    console.log('xx')
    console.log(ctx)
  }
  // const toggler = useContext(ModalContext)
  return (
    <ModalContextProvider>
      {
        ctx.modalIsOpen && <Cart onClick={onCloseCart} />
      }
      <Header />
      <main>
        <Meals />
      </main>

    </ModalContextProvider>
  );
}

export default App;
