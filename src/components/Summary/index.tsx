import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';


import { Container } from "./styles";

export function Summary() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transactions = useContext(TransactionsContext)


  return (
    <Container>
      <div>
        <header>
          <p>Entrées</p>
          <img src={incomeImg} alt="Entrées"/>
        </header>
        <strong>
        1000,00€ 
        </strong>
      </div>
      <div>
        <header>
          <p>Sorties</p>
          <img src={outcomeImg} alt="Sorties"/>
        </header>
        <strong>
         -500,00€ 
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entrées"/>
        </header>
        <strong>
         500,00€ 
        </strong>
      </div>
    </Container>
  )
}