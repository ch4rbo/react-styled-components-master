import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
         <Flex>
          <ul>
            <li>
              Gracias por visitar la web de Cripto Simple
            </li>
            <li>+1-543-123-4567</li>
            <li>fake@criptosimple.com.uy</li>
          </ul>
          <ul>
            <li>Quienes somos</li>
            <li>Que hacemos</li>
            <li>Preguntas Frecuentes</li>
          </ul>

          <ul>
            <li>Trabaja con nosotros</li>
            <li>Blog</li>
            <li>Contactanos</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; Copyright 2022 Cripto Simple</p>
      </Container>
    </StyledFooter>
  )
}