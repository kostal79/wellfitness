import { createRef } from 'react';
import './App.css';
import axios from "axios"

function App() {
  const google = async () => {
    window.open("http://localhost:5000/api/auth/google", "_self")
  }

  const email = createRef();
  const password = createRef();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email.current.value,
        password: password.current.value
      },
      {
        withCredentials: true // Send cookies along with the request
      })
      console.log(response.data)
    } catch(err) {
      console.log(err.response.data.message)
    }

    }

  return (
    <div className="App">
      <button onClick={google}>sign in with google</button>
      <h1>login</h1>
      <form onSubmit={login}>
        <input type="email" id="email" name='email' defaultValue="mail@mail.com" ref={email} />
        <input type="password" id="password" name="password" defaultValue="12345" ref={password} />
        <button type='submit'>Submit</button>
      </form>
      {/* <h1>sign up</h1>
      <form action='http://localhost:5000/api/auth/sign ' method='post'>
        <input type="email" id="email2" name='email' defaultValue="mail@mail.com" />
        <input type="password" id="password2" name="password" defaultValue="12345" />
        <button type='submit'>Submit</button>
      </form> */}
    </div>
  );
}

export default App;
