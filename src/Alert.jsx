import React from "react";
export const Alert=({message,click})=>(<div><span>{message}</span><button onClick={click}>Ok</button></div>)

export default Alert;