import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../auth/page/LoginScreen"
import RastreoRoutes from "../rastreo/routes/RastreoRoutes"
import AuthProvider from "../context/AuthProvider"
import { ApiProvider } from "../rastreo/context/ApiProvider"

export const AppRouter = () => {
  return (
    <>
    <AuthProvider>
      <ApiProvider>
      <Routes>
        <Route path="login" element={<LoginScreen/>}/>
        <Route path="/*" element={<RastreoRoutes/>}/>
      </Routes>
      </ApiProvider>
    </AuthProvider>
    </>
  )
}
