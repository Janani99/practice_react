


import React, { forwardRef } from 'react';
 export const ForwardRefChildCustomInput=forwardRef((props,ref)=>{
    return (
        <input ref={ref} {...props} ></input>
    )

});