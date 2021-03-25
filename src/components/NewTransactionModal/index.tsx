import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import { Container,TransactionTypeContainer,RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { TransactionsContext } from '../../TransactionsContext'
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose:()=> void;
  
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
  const {createTransaction} = useContext(TransactionsContext)

  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)
  const [category,setCategory] = useState('')
  
  const[type,setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    createTransaction({
      title,
      amount,
      category,
      type
    })

  }

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
      <Container onSubmit={handleCreateNewTransaction} >  
        <h2>Enregistrer une transaction</h2>

        <input 
        placeholder="Titre"
        value={title}
        onChange={event => setTitle(event.target.value) }
        />


        <input 
        placeholder="Valeur"
        type="number"
        value={amount}
        readOnly={false}
        
        onChange={event => setAmount(Number(event.target.value)) }
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
        placeholder="Catégorie"
        value={category}
        onChange={event => setCategory(event.target.value) }
        />

        <button type="submit">
          Enregistrer
        </button>
      </Container>           
    </Modal>
    
  )
}