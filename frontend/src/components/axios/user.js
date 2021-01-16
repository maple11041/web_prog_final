import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:5000/api/users" });

const LoginSubmit = async (email, password) => {
    var token, err, name, userId;

    await instance
        .post("/login", {
            email: email,
            password: password,
        })
        .then(function (response) {
            // console.log(response);
            console.log(response.data);
            token = response.data.token;
            name = response.data.name;
            userId = response.data.userId;
        })
        .catch(function (error) {
            console.log(error.response);
            err = error.response.data.message;
        });

    return { token, userId, err, name };
    /*
  console.log(e_mail,password)
  const {
    data: { token,userId,email }
  } = await instance.post('/login',{params:{email:e_mail,password:password}})
  console.log(token)
  return token*/
};

const SignUpSubmit = async (name, password, email) => {
    var token, err;

    await axios
        .post("http://localhost:5000/api/users/signup", {
            email: email,
            password: password,
            name: name,
        })
        .then(function (response) {
            console.log(response);
            console.log(response.data);
            token = response.data.token;
        })
        .catch(function (error) {
            console.log(error.response);
            err = error.response.data.message;
        });

    return { token, err };
    /*
  const {
    data: { token,message }
  } = await instance.post('/signup',{params:{name,password,email}})

  return {token,message}
  */
};

export { LoginSubmit, SignUpSubmit };
