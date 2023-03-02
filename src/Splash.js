import React from "react";
import { useState } from "react";

function Splash({enter}) {

    const [enter, setEnter] = useState(false)

    function enterSite(){
        setEnter(true)
    }

    return(
        <div onClick={enterSite}>
            Splash!
        </div>
    )
}

export default Splash