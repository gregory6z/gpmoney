import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/close.svg'

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
          <input 
        placeholder="Catégorie"/>

        <button type="submit">
          Enregistrer
        </button>
      </Container>           
    </Modal>
    
  )
}