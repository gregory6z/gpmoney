import Modal from 'react-modal'
import { Container,TransactionTypeContainer } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose:()=> void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){

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
          <button
          type="button"

          >
            <img src={incomeImg} alt="Entrée"/>
            <span>Entrée</span>
          </button>
          <button
          type="button"

          >
            <img src={outcomeImg} alt="Sortie"/>
            <span>Sortie</span>
          </button>
          
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