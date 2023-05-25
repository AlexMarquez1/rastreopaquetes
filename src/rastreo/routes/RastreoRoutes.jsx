import React from 'react'
import { LoginScreen } from '../../auth/page/LoginScreen'
import { MenuScreen } from '../pages/MenuScreen'
import { RegistroViajesScreen } from '../pages/RegistroViajesScreen'
import { RegistroUsuariosScreen } from '../pages/RegistroUsuariosScreen'
import HistorialViajesScreen from '../pages/HistorialViajesScreen'
import ConductoresScreen from '../pages/ConductoresScreen'
import VehiculosScreen from '../pages/VehiculosScreen'
import EmpresaScreen from '../pages/EmpresaScreen'
import { Mapa } from '../../components/Mapa/Mapa'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/NavBar'
import { ProtectedRoutes } from '../../routers/ProtectedRoutes'
import { LoadScript } from '@react-google-maps/api'

const RastreoRoutes = () => {
  return (
    <>
    <Navbar/>
  
    <div className="pt-7">
    <LoadScript
      googleMapsApiKey="AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
      libraries={['places']}
      region='MX'
      language='es'
    >
        <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="menu" element={<MenuScreen/>}/>
              <Route path="viajes" element={<RegistroViajesScreen/>}/>
              <Route path="usuarios" element={<RegistroUsuariosScreen/>}/>
              <Route path="historial" element={<HistorialViajesScreen/>}/>
              <Route path="conductores" element={<ConductoresScreen/>}/>
              <Route path="vehiculos" element={<VehiculosScreen/>}/>
              <Route path="empresas" element={<EmpresaScreen/>}/>
              <Route path="mapa" element={<Mapa/>}/>
            </Route>
            <Route path="/" element={<Navigate to='login'/>}/>
        </Routes>

    </LoadScript>
        
    </div>
    </>
  )
}

export default RastreoRoutes