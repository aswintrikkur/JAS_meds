
// export const useInputHandle=(event)=>{

import { useState } from "react";


//     return {}
// }

export const useInputHandle =(event)=>{
    const [target,setTarget]=useState();

    setTarget(prev=>({
        ...prev,
        [event.target.name]:event.target.value
    }))

    return {target}
}