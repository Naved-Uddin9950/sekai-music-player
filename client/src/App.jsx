import './App.css';
import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='bg-[#000000] w-full h-screen p-2'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default App
