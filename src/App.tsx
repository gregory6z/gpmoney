import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import Modal from 'react-modal'
import { useState } from 'react';

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {
  const[isNewTransactionModalOpen , setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  return (
      <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      
      <Dashboard />

      <GlobalStyle />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>

 
      </>
  );
}

export default App;
