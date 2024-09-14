// import React, { createContext,useState } from 'react'
// import ClassContext from './classContext';
// import FunctionalComponent from './functionalComponent';
//  export const ThemeContext=createContext({});
// export default function UseContext() {
//     const [dark,setDark]=useState(true)
//     const toggleTheme=()=>{
//         setDark(ps=>!ps);

//     }
//   return (

//     <div>
//         <ThemeContext.Provider value={dark}>
//         <button onClick={toggleTheme}>CHANGE COLOR</button>
//         <ClassContext/>
//         <FunctionalComponent/>
//         </ThemeContext.Provider>
      
//     </div>
//   )
// }


///----


import React, { createContext,useState } from 'react';
import { ThemeProvider } from './themeContext';

 import FunctionalComponent from './functionalComponent';
 export default function UseContext() {
    const [dark,setDark]=useState(true);
    const toggleTheme=()=>{
        console.log("toggleThemetoggleTheme")
        setDark(ps=>!ps);

    }
  return (

    <div>
        <ThemeProvider.Provider value={{dark,toggleTheme}}>
        <button onClick={toggleTheme}>CHANGE COLOR</button>
        {/* <ClassContext/> */}
        <FunctionalComponent/>
        </ThemeProvider.Provider>
      
    </div>
  )
}
