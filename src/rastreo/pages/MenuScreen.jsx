import '../../styles/estilos.css';
import fondo from '../../assets/Fondo.jpg';
import fondo2 from '../../assets/pai.jpeg';
import { NavBarPrincipal } from '../components/NavBarPrincipal';

export const MenuScreen = () => {
  return (
    <>
      <div className="div1">
        <div className="images">
          <img src={fondo}/>
        </div>
        <div className="div2">
          <img src={fondo2} />
        </div>
      </div>
      <NavBarPrincipal/>
      
    </>
  )
}
