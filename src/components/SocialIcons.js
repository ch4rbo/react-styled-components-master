import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com/cripto_simple' target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/profile.php?id=100073221533523' target="_blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/company/cripto-simple/?viewAsMember=true' target="_blank">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}