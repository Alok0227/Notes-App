import React from 'react'

export default function(props) {
    return (
        /*
         ---> Embedded from ReactJs Official WebPage.
            It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

            Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

            Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.
        */ 
        props.alert &&<div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                <p><strong>{props.alert.msg}</strong></p>
            </div>
        </div>
    )
}
