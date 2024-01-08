import { useNavigate } from 'react-router-dom'
import logoUrl from '../../assets/logo.svg'
import foorterLogoUrl from '../../assets/footer-logo.svg'

const Logo = ({dest}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/")
    }
  return (
      <img
      className='cursor-pointer'
      onClick={handleNavigate}
      src={dest==="footer"?foorterLogoUrl:logoUrl} alt="logoUrl"/>
  )
}

export default Logo
