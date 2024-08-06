import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {toast} from 'nextjs-toast-notify';
import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

function App() {
  const handleShowToastLeft = () => {
    toast.success('¡La operación se realizó con éxito!', {
      duration: 9000,
      progress: true,
      position: 'top-left',
      transition: 'bottomToTopBounce',
    });
  };

  const handleShowToasCenter = () => {
    toast.error('¡La operación se realizó con éxito!', {
      duration: 9000,
      progress: true,
      position: 'top-center',
    });
  };


  const handleShowToastRight = () => {
    toast.warning('¡La operación se realizó con éxito!', {
      duration: 15000,
      progress: true,
      position: 'top-right',
    });
  };


  const handleShowToastBottomLeft = () => {
    toast.info('¡La operación se realizó con éxito!', {
      duration: 8000,
      progress: true,
      position: 'bottom-left',
    });
  };

  const handleShowToastBottomCenter = () => {
    toast.info('¡La operación se realizó con éxito!', {
      duration: 6000,
      progress: true,
      position: 'bottom-center',
      transition: 'bounceIn',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>',
      sonido:true,
    });
  };

  const handleShowToastBottomRight = () => {
    toast.info('¡La operación se realizó con éxito!', {
      duration: 7000,
      progress: true,
      position: 'bottom-right',
      transition: ''
    });
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nextjs Toast Notify</h1>
      <div className="card">
        <button id="top-left" onClick={handleShowToastLeft}>Top left</button>
        <button id="top-center" onClick={handleShowToasCenter}>Top center</button>
        <button id="top-right" onClick={handleShowToastRight}>Top right</button>

        <button id="bottom-left" onClick={handleShowToastBottomLeft}>Bottom left</button>
        <button id="bottom-center" onClick={handleShowToastBottomCenter}>Bottom center</button>
        <button id="bottom-right" onClick={handleShowToastBottomRight}>Bottom right</button>
      </div>
    </>
  )
}

export default App
