import { toast } from 'react-toastify';
import { useRef, useState, useContext } from "react";
import { MyContext } from "../context";

const Initial = () => { 

    const context = useContext(MyContext);
    const textInput = useRef();
    const [showNext , setShowNext ] = useState(false);
    

    const handleChange = () => { 
        if(textInput.current.value.length >=5) setShowNext(true)
        else setShowNext(false)
    
      
       
    }

    const noty = () =>{ 
        
        toast.error(" Pregunta demasiado larga  ",{ 
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })



    }

  

    const handleSubmit = () => { 

        const value = textInput.current.value ; 
        if(value.length >=30){ 
            noty();  
            //setShowError(true);
            return false ; 

        }

        context.goTo(1); 
        context.question(value);
    }

    return (
        <div>
            <h1> Ask a Question </h1>
            <input
                ref={textInput}
                onChange={handleChange}
                name = "question"
                type="text"
                className="form-control"
            
            />

            {showNext &&
                <button
            className="btn animate__animated animate__fadeIn"
            onClick={handleSubmit}
            >
                Next
            </button>

            }

            {/* { 
                showError &&
                <div className="error"
            
                >
               
                the cuestion is too long

            </div>
            }
             */}
            
            
        </div>
    )


} 

export default Initial ; 