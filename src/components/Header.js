import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"

  export default function Header() {
        return (
    <StyledHeader>
       <Container>
            <Nav>
              <Logo src= './images/logo.svg' alt='' />
              <Button>Opera con nosotros</Button>
            </Nav>
              <Flex> 
                  <div>
                    <h1>Bievenido a nuestra Comunidad!</h1>
                      <p> 
                        Estamos constantemente monitoreando los mercados para descubrir la proxima gema criptografica, nuestro objetivo es detectar el proximo proyecto que tenga un elevado RoI antes de que suceda y para eso tenemos un equipo estudiando proyectos y ICO´s.                          </p>

                        <Button bg='#4a8cff' color='#07255b'>
                            Accede a las cotizaciones
                        </Button>
                  </div>
                  <Image src='./images/undraw_conversation_re_c26v.svg' alt='' />
            </Flex>
        </Container>
    </StyledHeader>
  )
}
