import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:5000/api/users' })

const LoginSubmit = async (email,password) => {
  console.log(email,password)
  const {
    data: { token }
  } = await instance.post('/login',{params:{email,password}})
  console.log(token)
  return token
}



const SignUpSubmit = async (name,password,email) => {
  const {
    data: { token,message }
  } = await instance.post('/signup',{params:{name,password,email}})

  return {token,message}
}

export { LoginSubmit,SignUpSubmit }
