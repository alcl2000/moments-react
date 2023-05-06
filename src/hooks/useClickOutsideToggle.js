import { useEffect, useState, useRef } from 'react';


function useClickOutsideToggle() {
     // NavBar toggle
     const [expanded, setExpanded] = useState(false);
     const ref = useRef(null)
     useEffect(() => {
         const handleClickOutside = (event) =>{
             if(ref.current && !ref.current.contains(event.target)){
                 setExpanded(false)
             }
         }
         document.addEventListener('mouseup', handleClickOutside)
         return () => {
             document.removeEventListener('mouseup', handleClickOutside)
         }
     }, [ref]);
    return {setExpanded, expanded, ref}
}

export default useClickOutsideToggle