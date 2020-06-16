import React, { useState, useEffect } from 'react'
import MathJax from 'react-mathjax2'
import Axios from 'axios';
import { Steps, Row, Col, message, Button } from 'antd';
import './style.css';

//const abc = "안녕"
// const content = `$$4 - 2\\frac{3}{4}$$`

const { Step } = Steps;

function ProblemPage() {

    const [Problem, setProblem] = useState([]);

    const [state, setstate] = useState({ current: 0 })

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
        for (var i = 0; i < 5; i++) {
            var rand = Math.floor(Math.random() * 5);
            switch (rand) {
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
            for (var j = 0; j < i; j++) {
                if (arr[i] === arr[j]) {
                    i--;
                }
            }
        }

        return (
            <Row gutter={[16, 16]} key={index}>
                <Col lg={18} xs={24} style={{ display: "contents" }}>
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
                        <div className='grid'>

                            <div id='quiz'>
                                <div id='question'>
                                    {/* <MathJax.Text text={content} /> */}
                                    <MathJax.Text text={problem.question} />
                                </div>
                            </div>

                            <div className="buttons">
                                <button id="btn"><MathJax.Text text={'① ' + arr[0]} /></button>
                                <button id="btn"><MathJax.Text text={'② ' + arr[1]} /></button>
                                <button id="btn"><MathJax.Text text={'③ ' + arr[2]} /></button>
                                <button id="btn"><MathJax.Text text={'④ ' + arr[3]} /></button>
                                <button id="btn"><MathJax.Text text={'⑤ ' + arr[4]} /></button>
                            </div>

                        </div>
                    </MathJax.Context>
                </Col>
            </Row>
        );
    })

    const steps = []

        for (var i = 0; i < renderCard.length; i++) {
            steps.push({ title: i, content: renderCard.slice(i, i + 1) })
        }

    function next() {
        const current = state.current + 1;
        setstate({ current });
    }

    function prev() {
        const current = state.current - 1;
        setstate({ current });
    }

    const onChange = current => {
        setstate({ current });
    }

    const { current } = state;

    if (steps.length > 2) {
        return (
            <div>
                <Steps current={current} direction='horizontal' onChange={onChange}>
                    {steps.map(item => (
                        <Step key={item.title} />
                    ))}
                </Steps>

                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>

            </div>
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default ProblemPage