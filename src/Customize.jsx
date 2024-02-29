import { useState } from "react"

export default function Customize(){
    const [show, setHide] = useState(false);

    return(
        <>
            <div className="form-segment">
                <div className="form-label">
                    <div className="form-title">
                        <p className="form-icon-custom"></p>
                        <h1>Customize</h1>
                    </div>
                    <button className={show ? "hide" : "show"} onClick={() =>show ? setHide(false) : setHide(true)}></button>
                </div>
            </div>
        </>
    )
}