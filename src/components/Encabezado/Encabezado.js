import { Link } from "react-router-dom";
import styles from "./Encabezado.module.css"
import logo from "./Logo-alura.png";
import EncabezadoLink from "components/EncabezadoLink/EncabezadoLink";
 
function Encabezado (){
    return(
        <header className={styles.encabezado}>
         <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/>
          </section>
          </Link>
          <nav>
            <EncabezadoLink url="./">
               Home
            </EncabezadoLink>
            <EncabezadoLink url="./NuevoVideo">
               Nuevo Video
            </EncabezadoLink>

          </nav>
        </header>
    )
}

export default Encabezado; 