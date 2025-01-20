import Encabezado from "components/Encabezado/Encabezado"
import Pie from "components/Pie"
import Banner from "components/Banner/Banner"
import Titulo from "components/Titulo"


function Inicio (){
    return(
      <div>
        <Encabezado></Encabezado>
        <Banner img="home" color="#154580"/>
        <Titulo></Titulo>
        <Pie />
      </div>
    )
}

export default Inicio