import './App.css';
import { useRef } from 'react';

function App(){
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return(
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input id="email" name='email' ref={emailRef} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id="password" name='password' ref={passwordRef} type="password" />
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  )
}
export default App;
