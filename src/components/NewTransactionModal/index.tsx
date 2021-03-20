import Modal from 'react-modal'
import { Container,TransactionTypeContainer,RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose:()=> void;
  
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
  const[type,setType] = useState('deposit')

  return (
  
    <Modal  
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="modal-close">
        <img src={closeImg} alt="Fermer Modal"/>
      </button>
      <Container>  
        <h2>Enregistrer une transaction</h2>

        <input 
        placeholder="Titre"/>
        <input 
        placeholder="Valeur"
        />

        <TransactionTypeContainer>
          <RadioBox
          type="button"
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green"

          >
            <img src={incomeImg} alt="Entrée"/>
            <span>Entrée</span>
          </RadioBox>
          <RadioBox
          type="button"
          onClick={() => {setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor="red"

          >
            <img src={outcomeImg} alt="Sortie"/>
            <span>Sortie</span>
          </RadioBox>
          
        </TransactionTypeContainer>
          <input 
        placeholder="Catégorie"/>

        <button type="submit">
          Enregistrer
        </button>
      </Container>           
    </Modal>
    
  )
}