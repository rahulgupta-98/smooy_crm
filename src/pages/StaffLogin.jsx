import { Layout } from '../components/layout'
import { StaffLoginForm } from '../components/form'
import { useInputValue } from '../hooks/useInputValue'

export default function StaffLogin() {
  const staffIdOrEmail = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = () => {
    console.log('staff login', {
      staffIdOrEmail: staffIdOrEmail.value,
      password: password.value,
    })
    // TODO: navigate to staff home when backend/router is ready.
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

