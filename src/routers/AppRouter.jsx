import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../auth/page/LoginScreen"
import { Mapa } from "../components/Mapa/Mapa"
import { MenuScreen } from "../rastreo/pages/MenuScreen"
import { RegistroUsuariosScreen } from "../rastreo/pages/RegistroUsuariosScreen"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Navigate to='login'/>}/>
            <Route path="login" element={<LoginScreen/>}/>
            <Route path="menu" element={<MenuScreen/>}/>
            <Route path="viajes" element={<RegistroUsuariosScreen/>}/>
            <Route path="usuarios" element={<RegistroUsuariosScreen/>}/>
            <Route path="mapa" element={<Mapa/>}/>
        </Routes>
    </>
  )
}
