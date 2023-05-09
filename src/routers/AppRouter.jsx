import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../auth/page/LoginScreen"
import RastreoRoutes from "../rastreo/routes/RastreoRoutes"
import AuthProvider from "../context/AuthProvider"

export const AppRouter = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="login" element={<LoginScreen/>}/>
        <Route path="/*" element={<RastreoRoutes/>}/>
      </Routes>
    </AuthProvider>
    </>
  )
}
