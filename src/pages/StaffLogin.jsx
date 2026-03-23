import { Layout } from '../components/layout'
import { StaffLoginForm } from '../components/form'
import { useInputValue } from '../hooks/useInputValue'
import { useNavigate } from 'react-router-dom'

export default function StaffLogin() {
  const navigate = useNavigate()
  const staffIdOrEmail = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = () => {
    console.log('staff login', {
      staffIdOrEmail: staffIdOrEmail.value,
      password: password.value,
    })
    // For now, route to Staff Home.
    navigate('/staff-home')
  }

  return (
    <Layout>
      <StaffLoginForm
        staffIdOrEmail={staffIdOrEmail.value}
        onStaffIdOrEmailChange={staffIdOrEmail.onChange}
        password={password.value}
        onPasswordChange={password.onChange}
        onSubmit={handleSubmit}
        onForgotPassword={() => console.log('forgot staff password')}
      />
    </Layout>
  )
}

