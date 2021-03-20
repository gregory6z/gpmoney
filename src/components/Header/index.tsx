import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="gp momney"/>
        <button type="button">
          nouvelle transaction
        </button>
      </Content>
    </Container>
  )
}