import React, { useState } from 'react'
import '../../style/fanfeed/FeedCreateInput.css'

const FeedCreateInput = ({content, setContent}) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let [isInputspaceClicked, setInputspace] = useState(false);

    return (
        <>
        <textarea className="feedcreateInputspace" 
            onFocus = {() => {
                setInputspace(true);
            }}

            onBlur = {() => {
                setInputspace(false);
            }}
            placeholder={isInputspaceClicked === true ? "" : "피드를 입력하세요."} value = {content} onChange={(event) => setContent(event.target.value)}>
        </textarea>
        </>
    )
}

export default FeedCreateInput