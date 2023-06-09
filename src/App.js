import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from './firebase/firebase.init';


const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoolgeSignIn = ()=>{
    //console.log('google comming soon')
    signInWithPopup(auth , provider)
    .then(result =>{
      const user = result.user;
      console.log(user);

    })
    .catch(error =>{
      console.error('error:', error)
    })
  }
  
  return (
    <div className="App">
      <button onClick={handleGoolgeSignIn}>Google Sign In</button>
     
    </div>
  );
}

export default App;
