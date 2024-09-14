// import React, { useContext } from 'react'
// import { ThemeContext } from '.'

// export default function FunctionalComponent() {
//     const darktheme=useContext(ThemeContext);
//   return (
//     <div style={{background:darktheme?"black":"purple"}}>
//       <p>functional component</p>
//     </div>
//   )
// }



import React from 'react';
import { useThemeConsumer } from './themeContext';

 
export default function FunctionalComponent() {
    const {dark,toggleTheme}= useThemeConsumer();
   return (
    <div style={{background:dark?"black":"purple"}}>
        <button onClick={toggleTheme}>toggle</button>
      <p>functional component</p>
    </div>
  )
}
