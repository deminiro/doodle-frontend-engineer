import { Chat } from './chat';
import './App.css';
import { useGetUser } from '../hooks/useGetUser';

function App() {
  useGetUser();

  return <Chat />;
}

export default App;
