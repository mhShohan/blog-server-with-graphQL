import './App.css';
import MainRoute from './routes/MainRoute';
import PublicRoute from './routes/PublicRoute';
import { useContext } from 'react';
import { AuthContext } from './state/AuthContextProvider';
import Loader from './components/Loader';

function App() {
  // const { state } = useContext(AuthContext);

  // if (state.loading) return <Loader />;

  // if (!state.isValidToken) return <PublicRoute />;

  return (
    <>
      <MainRoute />
    </>
  );
}

export default App;
