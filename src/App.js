import Router from './Router';
import { useEffect } from 'react';
import GoogleLogin from './components/GoogleLogin';

function App() {
  return (
    <>
      <GoogleLogin />
      <div className="App">HanSpace - User</div>
      <Router />
    </>
  );
}

export default App;
