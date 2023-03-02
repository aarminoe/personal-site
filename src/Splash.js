import React from "react";
import { useState } from "react";

function Splash({enterToSite}) {

    

    function enterSite(){
        enterToSite(true)
    }

    return(
        <div onClick={enterSite}>
            Splash!
        </div>
    )
}

export default Splash