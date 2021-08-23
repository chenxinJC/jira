import { FormEvent } from 'react'
// import axios from 'axios'
import { useAuth } from 'context/auth-context'

export const LoginScreen = () => {
    // const apiUrl = process.env.REACT_APP_API_URL
    /* const login = (param: { username: string; password: string }) => {
    axios
      .post(`${apiUrl}/login`, param, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
 */
    const { login, user } = useAuth()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({ username, password })
    }
    return (
        <form onSubmit={handleSubmit}>
            {user?.name}
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id={'username'} />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id={'password'} />
            </div>
            <button type={'submit'}>登录</button>
        </form>
    )
}
