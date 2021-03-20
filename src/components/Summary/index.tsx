import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entrées</p>
          <img src={incomeImg} alt="Entrées"/>
        </header>
        <strong>
         €1000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Sorties</p>
          <img src={outcomeImg} alt="Sorties"/>
        </header>
        <strong>
         -€500,00
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entrées"/>
        </header>
        <strong>
         €500,00
        </strong>
      </div>
    </Container>
  )
}