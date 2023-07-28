import React, { useState } from 'react'
import '../../style/fanfeed/FeedCreateInput.css'

const FeedCreateInput = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let [isInputspaceClicked, setInputspace] = useState(false);

    return (
        <>
        <textarea className="feedcreate-inputspace" 
            onFocus = {() => {
                setInputspace(true);
            }}

            onBlur = {() => {
                setInputspace(false);
            }}
            placeholder={isInputspaceClicked === true ? "" : "피드를 입력하세요."}>
        </textarea>
        </>
    )
}

export default FeedCreateInput