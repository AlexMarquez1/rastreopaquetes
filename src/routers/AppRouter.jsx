import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../auth/page/LoginScreen"
import RastreoRoutes from "../rastreo/routes/RastreoRoutes"

export const AppRouter = () => {
  return (
    <>
    
      <Routes>
            <Route path="login" element={<LoginScreen/>}/>
            <Route path="/*" element={<RastreoRoutes/>}/>
        </Routes>  
    </>
  )
}
