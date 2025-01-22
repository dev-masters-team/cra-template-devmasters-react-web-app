import { Button } from 'antd'
import { useAppDispatch, useAppSelector } from '../../utils/redux/store'
import { logout } from '../../utils/redux/authSlice'

export default function Admin() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div>
      role: {user?.role}
      <Button
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </Button>
    </div>
  )
}
