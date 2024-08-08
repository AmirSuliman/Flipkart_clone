import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DataProvider from './context/DataProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <DataProvider>
      <ToastContainer />
      <Header />
      <Home />
    </DataProvider>
  );
}

export default App;
