import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useContext } from 'react';
import { MyContext } from './context';


import 'animate.css';
import './assets/App.css'
import Initial from './components/initial';
import Confirm from './components/confirm';
import Result from './components/result';
import {SwitchTransition, CSSTransition} from 'react-transition-group'

const  App = () => {

  const context = useContext(MyContext)



  const handleComponent = () => { 
    const screen = context.state.screen; 
    if(screen === 0) return <Initial/>
    if(screen === 1) return <Confirm/>
    if(screen === 2) return <Result/>
  }





  return (
   <div>
     <div className='container'> 

<SwitchTransition mode='out-in'>

<CSSTransition
 
 key={context.state.screen}
 timeout={1000}
 classNames = 'fade'
>
  
  {handleComponent()}

</CSSTransition>

</SwitchTransition>

</div>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
   </div>
  );
}

export default App;
