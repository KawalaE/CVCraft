import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react"

export default function Customize({pictureHandler, colorHandler}){
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
                {show && (
                    <form style={{animation: "slide-down 600ms forwards"}} className="contactForm">
                        <div className="form-section">
                            <div className="checkbox">
                                <label htmlFor="profile-pic-checkbox">Hide profile picture</label>
                                <input onChange={pictureHandler} type="checkbox" id="profile-pic-checkbox"></input>
                            </div>
                        </div>
                        <div className="form-section">
                            <div className="checkbox">
                                <label htmlFor="color-picker">Pick an accent color</label>
                                <input onChange={colorHandler}type="color" id="color-picker"/>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}