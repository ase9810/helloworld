import React, { useState, useEffect } from 'react'
import MathJax from 'react-mathjax2'
import Axios from 'axios';
import Quiz from 'react-quiz-component';
import { useSelector } from 'react-redux';

function TestPage(props) {
    const [Test, setTest] = useState([]);

    const [Result, setResult] = useState([]);

    const [isAuth, setisAuth] = useState(false);

    const user = useSelector(state => state.user);
    

    useEffect(() => {
        if(isAuth) {
        Axios.get('/api/test/getTest')
            .then(response => {
                if (response.data.success) {
                    setTest(response.data.test);
                } else {
                    alert('문제 정보를 가져오기를 실패했습니다.')
                }
            })
        Axios.post('/api/result/getResult', {
            tester : user.userData._id
        })
            .then(response => {
                if (response.data.success) {
                    setResult(response.data.result);
                } else {
                    // alert('결과 정보를 가져오기를 실패했습니다.')
                }
            })            
        }
        if(user.userData === undefined) {
            setisAuth(false);
        } else {
            setisAuth(user.userData.isAuth);
        }
    }, [isAuth, user.userData])

    if (isAuth) {
        const quizData = {
            "questions": Test.map((test) => {
                const quiz = {
                    "_id": test._id,
                    "question": test.question,
                    "questionType": "text",
                    "questionPic": test.pic !== undefined ? 'http://192.168.0.91:5000/' + test.pic : undefined,
                    "answerSelectionType": test.answer.indexOf(',') >= 0 ? "multiple" : "single",
                    "answers": test.mark4 !== undefined ?
                        [
                            test.mark1,
                            test.mark2,
                            test.mark3,
                            test.mark4,
                            test.mark5
                        ]
                        :
                        [
                            test.mark1,
                            test.mark2,
                            test.mark3
                        ]
                    ,
                    "correctAnswer": test.answer.indexOf(',') >= 0 ? test.answer.split(',') : test.answer,
                    "correctCount": test.correctcnt != null ? test.correctcnt : 0,
                    "totalCount": test.totalcnt != null ? test.totalcnt : 0,
                    "point": "1"
                }
                return quiz
            }),
            "testid": Test.map(test => test.testid).splice(0, 1).toString(),
            "result": Result.length !== 0 ? Result.map(result => result.correctPoint).toString() : '0',
            "userid": user.userData._id
        }
    
        console.log(quizData)

        return (
            <MathJax.Context
                input='ascii'
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
                    <Quiz quiz={quizData} shuffle={true} shuffleAnswer={true} lastCheck={true} />
                </div >
            </MathJax.Context>
        )
    } else {
        return (
            <div>...Loading</div>
        )
    }
}

export default TestPage
