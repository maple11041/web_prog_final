import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:5000/api/groups' })

const CreateGroup = async (leader,shop) => {
  

  await instance.post( '/',{
    leader:leader
    shop:shop
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response);
  });

  //return {token,err}
  /*
  console.log(e_mail,password)
  const {
    data: { token,userId,email }
  } = await instance.post('/login',{params:{email:e_mail,password:password}})
  console.log(token)
  return token*/
}



const CheckGroup = async () => {
  var groups
  

  await instance.get('/')
  .then(function (response) {
    console.log(response);
    console.log(response.data)
    groups = response.data.groups
  })
  .catch(function (error) {
    console.log(error.response);

  });
  
  return groups
  /*
  const {
    data: { token,message }
  } = await instance.post('/signup',{params:{name,password,email}})

  return {token,message}
  */
}

export { CreateGroup, CheckGroup }
