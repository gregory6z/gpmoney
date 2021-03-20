import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable(){
  useEffect(()=> {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
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