import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../../features/auth/SignIn'
import { useAppSelector } from '../redux/store'
import Admin from '../../features/admin/Admin'

export default function AppRoutes() {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Routes>
      {user ? (
        <>
          <Route path="*" element={<Admin />} />
        </>
      ) : (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}
