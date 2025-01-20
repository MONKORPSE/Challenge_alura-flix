import { BrowserRouter,Routes,Route} from "react-router-dom";

const { default: Inicio } = require("pages/Inicio");


function AppRoutes (){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>} />
        </Routes>
      </BrowserRouter>  
    )
}

export default AppRoutes; 