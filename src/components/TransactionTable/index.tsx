import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";



export function TransactionTable(){
  const  {transactions}  = useTransactions()
 
  
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Valeur</th>
            <th>Catégorie</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>

          { transactions.map(transaction => (  //****chaque map il faul une key 
            
              <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('fr',{
                  style:'currency',
                  currency:'EUR'
                }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('Fr').format(
                new Date(transaction.createdAt)
               )}</td>
            </tr>
            )  
           )}
        </tbody>
        
      </table>
    </Container>
  )
}