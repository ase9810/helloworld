import React, { useState, useEffect } from 'react'
import MathJax from 'react-mathjax2'
import Axios from 'axios';
import { Row, Col, Steps } from 'antd';
import './style.css';

//const abc = "안녕"
// const content = `$$4 - 2\\frac{3}{4}$$`

function ProblemPage() {

    const [Problem, setProblem] = useState([]);

    useEffect(() => {
        Axios.get('/api/problem/getProblem')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setProblem(response.data.problem);
                } else {
                    alert('문제 정보를 가져오기를 실패했습니다.')
                }
            })
    }, [])

    const renderCard = Problem.map((problem, index) => {
        let arr = [];

        for(var i = 0; i < 5; i++) {
            var rand = Math.floor(Math.random() * 5);
            switch(rand) {
                case 0:
                   arr[i] = problem.mark1;
                   break;
                case 1:
                   arr[i] = problem.mark2;
                   break;
                case 2:
                   arr[i] = problem.mark3;
                   break;
                case 3:
                   arr[i] = problem.mark4;
                   break;
                case 4:
                   arr[i] = problem.mark5;
                   break;
                default:
            }
            for(var j = 0; j < i; j++) {
                if(arr[i] === arr[j] ) {
                    i--;
                }
            }
        }


        return (
            <Row gutter={[16, 16]} key={index}>
                <Col lg={18} xs={24}>
                    <div className='grid'>
                        <MathJax.Context
                            input='ascii'
                            onLoad={() => console.log("Loaded MathJax script!")}
                            onError={(MathJax, error) => {
                                console.warn(error);
                                console.log("Encountered a MathJax error, re-attempting a typeset!");
                                MathJax.Hub.Queue(
                                    MathJax.Hub.Typeset()
                                );
                            }}
                            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=AM_HTMLorMML"
                            options={{
                                asciimath2jax: {
                                    useMathMLspacing: true,
                                    delimiters: [["$$", "$$"]],
                                    preview: "none",
                                }
                            }}
                        >
                            <div id='quiz'>
                                <div id='question'>
                                    {/* <MathJax.Text text={content} /> */}
                                    <MathJax.Text text={problem.question} />
                                </div>
                            </div>
                            
                        </MathJax.Context>
                        <div className="buttons">
                                <button className="btn">① {arr[0]}</button>
                                <button className="btn">② {arr[1]}</button>
                                <button className="btn">③ {arr[2]}</button>
                                <button className="btn">④ {arr[3]}</button>
                                <button className="btn">⑤ {arr[4]}</button>
                            </div>
                    </div>
                </Col>
            </Row>
        );
    })
    return (
        // <Steps current={0
        
        // }>
            renderCard.slice(0,1)
        // {/* </Steps> */}
        
    )
}

export default ProblemPage