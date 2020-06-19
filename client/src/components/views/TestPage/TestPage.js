import React, { useState, useEffect } from 'react'
import MathJax from 'react-mathjax2'
import Axios from 'axios';
import Quiz from 'react-quiz-component';

function TestPage() {
    const [Test, setTest] = useState([]);

    useEffect(() => {
        Axios.get('/api/test/getTest')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setTest(response.data.test);
                } else {
                    alert('문제 정보를 가져오기를 실패했습니다.')
                }
            })
    }, [])

    const quizData = {
        "questions": Test.map((test) => {
            const quiz = {
                "question": test.question,
                "questionType": "text",
                "answerSelectionType": "single",
                "answers": [
                    test.mark1,
                    test.mark2,
                    test.mark3,
                    test.mark4,
                    test.mark5
                ],
                "correctAnswer": test.answer
            }
            return quiz
        })
    }
    
    console.log(quizData)

    return (
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
            <div>

                <Quiz quiz={quizData} shuffle={true} continueTillCorrect={true}/>

            </div >
        </MathJax.Context>

    )
}

export default TestPage
