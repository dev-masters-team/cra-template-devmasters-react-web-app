import { Button, Card, Flex, Form, Input, Layout } from 'antd'
import { useAttemptListener } from 'dev-masters-react-kit'
import { attemptLogin, AuthDTO } from '../../utils/redux/authSlice'
import { store, useAppDispatch } from '../../utils/redux/store'
import './auth.scss'

export default function SignIn() {
  const [signInForm] = Form.useForm<AuthDTO>()
  const dispatch = useAppDispatch()

  function onFinish(values: AuthDTO) {
    dispatch(attemptLogin(values))
  }

  useAttemptListener({
    store: store,
    attempt: attemptLogin,
    onFulfilled: () => {
      console.log('authorized')
    },
  })

  return (
    <Layout className='auth'>
      <Flex flex={1} justify="center" align="center">
        <Card>
          <Form
            form={signInForm}
            onFinish={onFinish}
            className="login"
            initialValues={{
              email: process.env.REACT_APP_DEV_LOGIN,
              password: process.env.REACT_APP_DEV_PASSWORD,
            }}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Invalid email, example: user@gmail.com!' },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Flex>
    </Layout>
  )
}
