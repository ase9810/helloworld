import React from 'react'
import jQuery from 'jquery'

import './Result.scss'



function ResultPage(props) {

    window.$ = window.jQuery = jQuery;

    return (
        <div id="eee">
            <div id="test">
                시매쓰 월간 수행 분석 
                <span>({})</span>
            </div>
            <div id="bbb">
                <div id="postit"></div>
                <div id="incorrect"></div>
                <div id="aaa"></div>
            </div>
        </div>
    )
}

export default ResultPage
