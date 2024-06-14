import './App.css';
import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import { PlayProvider } from './contexts/PlayContext';
import { useState } from 'react';

function App() {

  const [isPlaying, setIsPlaying] = useState({
    id: "101",
    url: "",
    duration: 0,
    time: "00:00",
    artist: "Artist",
    title: "Title"
  });

  return (
    <div className='bg-[#000000] w-full h-screen p-2 flex flex-row gap-2'>
      <PlayProvider value={ { isPlaying, setIsPlaying } }>
        <Sidebar />
        <Outlet />
      </PlayProvider>
    </div>
  )
}

export default App