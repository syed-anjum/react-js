import { useState,useEffect } from "react";
const useOnlineStatus = () =>{
    const [onlineSatus, setonlineSatus] = useState(true);
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setonlineSatus(false);
        });
        window.addEventListener('online',()=>{
            setonlineSatus(true);
        });
    },[]);
    return onlineSatus;
}

export default useOnlineStatus;