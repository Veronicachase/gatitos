import { Route, Routes } from "react-router-dom"
import Listado from "../components/Listado"
import Gestion from "../components/Gestion"

const MiRouter = () => {
  return (
    <Routes>
    <Route path="/" element = {<Listado/>}/>
    <Route path="/gatitos" element = {<Listado/>}/>
    <Route path="/gestion" element = {<Gestion/>}/>
    <Route path="*" element = {<Listado/>}/>
    </Routes>
  )
}

export default MiRouter
