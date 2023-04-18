import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../auth/page/LoginScreen"
import { Mapa } from "../components/Mapa/Mapa"
import { MenuScreen } from "../rastreo/pages/MenuScreen"
import { RegistroUsuariosScreen } from "../rastreo/pages/RegistroUsuariosScreen"
import { RegistroViajesScreen } from "../rastreo/pages/RegistroViajesScreen"
import HistorialViajesScreen from "../rastreo/pages/HistorialViajesScreen"
import { NavBarPrincipal } from "../rastreo/components/NavBarPrincipal"
import ConductoresScreen from "../rastreo/pages/ConductoresScreen"
import VehiculosScreen from "../rastreo/pages/VehiculosScreen"

export const AppRouter = () => {
  return (
    <>
    <NavBarPrincipal/>
    <div className="pt-7">
      <Routes>
            <Route path="/" element={<Navigate to='login'/>}/>
            <Route path="login" element={<LoginScreen/>}/>
            <Route path="menu" element={<MenuScreen/>}/>
            <Route path="viajes" element={<RegistroViajesScreen/>}/>
            <Route path="usuarios" element={<RegistroUsuariosScreen/>}/>
            <Route path="historial" element={<HistorialViajesScreen/>}/>
            <Route path="conductores" element={<ConductoresScreen/>}/>
            <Route path="vehiculos" element={<VehiculosScreen/>}/>
            <Route path="mapa" element={<Mapa/>}/>
        </Routes>
    </div>    
    </>
  )
}
