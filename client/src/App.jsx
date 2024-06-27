import './App.css';
import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';
import { PlayProvider } from './contexts/PlayContext';
import { useState } from 'react';
import { MenuProvider } from './contexts/MenuContext';

function App() {

  const [isPlaying, setIsPlaying] = useState({
    id: "101",
    url: "",
    duration: 0,
    time: "00:00",
    artist: "Artist",
    title: "Title"
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-[#000000] w-full h-screen sm:p-2 flex flex-row gap-2'>
      <PlayProvider value={{ isPlaying, setIsPlaying }}>
        <MenuProvider value={{ isMenuOpen, setIsMenuOpen }}>
          <Sidebar />
          <Outlet />
        </MenuProvider>
      </PlayProvider>
    </div>
  )
}

export default App