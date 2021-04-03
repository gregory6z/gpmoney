import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';


import { Container } from "./styles";

export function Summary() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {transactions} = useTransactions()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const totalDeposits = transactions.reduce((acc, transaction) => { 
   // if(transaction.type === 'deposit'){
   //   return acc + transaction.amount;
  //  }
  //  return acc;
  //}, 0)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const summary = transactions.reduce((acc, transaction) =>{
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;

    } else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc
  },{
    deposits: 0 ,
    withdraws: 0 , 
    total: 0 
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entrées</p>
          <img src={incomeImg} alt="Entrées"/>
        </header>
        <strong>
        {new Intl.NumberFormat('fr',{
                  style:'currency',
                  currency:'EUR'
                }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Sorties</p>
          <img src={outcomeImg} alt="Sorties"/>
        </header>
        <strong>
         -    {new Intl.NumberFormat('fr',{
                  style:'currency',
                  currency:'EUR'
                }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entrées"/>
        </header>
        <strong>
        {new Intl.NumberFormat('fr',{
                  style:'currency',
                  currency:'EUR'
                }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}