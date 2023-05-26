import { Navigate, Route, Routes } from "react-router-dom"
import { LoginScreen } from "../auth/page/LoginScreen"
import RastreoRoutes from "../rastreo/routes/RastreoRoutes"
import AuthProvider from "../context/AuthProvider"
import { ApiProvider } from "../rastreo/context/ApiProvider"
import { LoadScript } from "@react-google-maps/api"

export const AppRouter = () => {
  return (
    <>
    <AuthProvider>
      <ApiProvider>
        <LoadScript
          googleMapsApiKey="AIzaSyAwXqH5JgdnOqOJy8F8_PrkvOqLtHhy60I"
          libraries={['places']}
          region='MX'
          language='es'
        >
          <Routes>
            <Route path="login" element={<LoginScreen/>}/>
            <Route path="/*" element={<RastreoRoutes/>}/>
          </Routes>
        </LoadScript>
      </ApiProvider>
    </AuthProvider>
    </>
  )
}
