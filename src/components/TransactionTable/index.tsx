import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
  useEffect(()=> {
    api.get('transactions')
      .then(response => console.log(response.data))
  },[])

  
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
          <tr>
            <td>développement de sitesWeb.</td>
            <td className="deposit">12000€</td>
            <td>développement</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Loyer de la maison.</td>
            <td className="withdraw">-1100€</td>
            <td>Maison</td>
            <td>30/02/2021</td>
          </tr>
        </tbody>
        
      </table>
    </Container>
  )
}