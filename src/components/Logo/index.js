import { useNavigate } from 'react-router-dom'
import logoUrl from '../../assets/logo.svg'
import foorterLogoUrl from '../../assets/footer-logo.svg'
import { twMerge } from 'tailwind-merge';

const Logo = ({dest,className}) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/")
    }
  return (
      <img
      className={twMerge(['cursor-pointer',className])}
      onClick={handleNavigate}
      src={dest==="footer"?foorterLogoUrl:logoUrl} alt="logoUrl"/>
  )
}

export default Logo
