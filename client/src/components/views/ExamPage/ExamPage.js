import React, { useState } from 'react'
import "./Exam.css"

const level = {
    nc: ['NC1단계', 'NC2단계', 'NC3단계', 'NC4단계', 'NC5단계', 'NC6단계'],
    ap: ['AP1단계', 'AP2단계', 'AP3단계', 'AP4단계', 'AP5단계', 'AP6단계'],
    newgifted: ['G단계', 'I단계', 'F단계', 'T단계', 'E단계', 'D단계'],
    winimath: ['위니매쓰1', '위니매쓰2', '수즐기'],
    rootone: ['루트원1학년', '루트원2학년', '루트원3학년'],
    special: ['방학특강', '영재특강', '기타특강']
};

function ExamPage(props) {
    const [state, setstate] = useState([])
    const [book, setBook] = useState([])
    const [grade, setGrade] = useState([])
    const [problem, setProblem] = useState([])


    var testlist = [];


    const onProblemChange = (e) => {
        const value = e.target.value;
        if (value === "nc" || value === "ap" || value === "newgifted") {
            setBook(['1', '2', '3', '4', '5', '6'])
            if (value === "nc") {
                setGrade(['Power', 'Jump'])
            } else if (value === "ap") {
                setGrade(['해', '별', '달'])
            } else if (value === "newgifted") {
                setGrade(['공통'])
            }
        }

        else if (value === "winimath") {
            setBook(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
            setGrade(['공통'])
        }
        else if (value === "rootone") {
            setBook(['1', '2', '3', '4'])
            setGrade(['Prime', 'Power'])
        }
        else {
            setBook([])
            setGrade([])
        }
        console.log(level[value])
        if (value !== "") {
            setProblem({
                selectedProgram: level[value],
                selectedLevel: level[value][0],
                selectedBook: [],
                selectedGrade: []
            });
        } else {
            setProblem({
                selectedLevel: [],
                selectedBook: [],
                selectedGrade: []
            });
        }

        console.log('a')
    };

    const onLevelChange = (e) => {
        const value = e.target.value
        console.log(value)
        if (value.indexOf("단계") > -1) {
            setBook(['1', '2', '3', '4', '5', '6'])
            if (value.indexOf("NC") > -1) {
                setGrade(['Power', 'Jump'])
            } else if (value.indexOf("AP") > -1) {
                setGrade(['해', '별', '달'])
            } else {
                setGrade(['공통'])
            }
        }
        else if (value === '위니매쓰1' || value === '위니매쓰2') {
            setBook(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
            setGrade(['공통'])
        }
        else if (value === "수즐기") {
            setBook(['1', '2'])
            setGrade(['공통'])
        }
        else if (value.indexOf("루트원") > -1) {
            setBook(['1', '2', '3', '4'])
            setGrade(['Prime', 'Power'])
        }
        else {
            setBook([])
            setGrade([])
        }

        setProblem({
            ...problem,
            selectedLevel: value,
            selectedBook: [],
            selectedGrade: []
        });

        console.log('b')
    };

    const onBookChange = (e) => {
        const value = e.target.value;
        setProblem({
            ...problem,
            selectedBook: value,
        });
        console.log('c')
    };

    const onGradeChange = (e) => {
        const value = e.target.value
        setProblem({
            ...problem,
            selectedGrade: value,
        });
        console.log('c')
    };

    const { selectedProgram } = problem;
    console.log(selectedProgram)


    function title(number) {
        var arr = [];
        for (var i = 0; i < number; i++) {
            arr.push(
                <div id="table" key={i}>
                    <table className="exam" style={{ width: '100%' }}>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>내용</th>
                                <th>종류</th>
                                <td>
                                    <select id={"class" + (i + 1)} name="class[]">
                                        <option value="">분류</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="2">{i + 1}</th>
                                <td rowSpan="2"><textarea name="contents[]"></textarea></td>
                                <th>난이도</th>
                                <td>
                                    <input type="radio" id={"basic" + (i + 1)} name={"ex[" + i + "]"} value="기초" />
                                    <label htmlFor={"basic" + (i + 1)}> 기초</label>
                                    <br></br>
                                    <input type="radio" id={"apply" + (i + 1)} name={"ex[" + i + "]"} value="응용" />
                                    <label htmlFor={"apply" + (i + 1)}> 응용</label>
                                    <br></br>
                                    <input type="radio" id={"deep" + (i + 1)} name={"ex[" + i + "]"} value="심화" />
                                    <label htmlFor={"deep" + (i + 1)}> 심화</label>
                                </td>
                            </tr>
                            <tr>
                                <th>배점</th>
                                <td><input type="number" name="point[]" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        return arr;
    }

    const handleChange = (e) => {
        testlist = title(e.target.value)
        console.log(testlist)
        console.log(document.getElementById("eee"))
        setstate(testlist)
    }



    return (
        <form encType="multipart/form-data" action="/api/exam/saveExam" method="post">
            <div style={{ paddingLeft: 100, paddingRight: 100 }}>
                <button id="submit" type="submit">전송</button>
                <h2>기본 정보</h2>
                <table className="exam" style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th>프로그램</th>
                            <td>
                                <select id="program" name="program" onChange={onProblemChange}>
                                    <option value="">프로그램</option>
                                    <option value="nc">NC</option>
                                    <option value="ap">AP</option>
                                    <option value="newgifted">뉴기프티드</option>
                                    <option value="winimath">위니매쓰</option>
                                    <option value="rootone">루트원</option>
                                    <option value="special">특강</option>
                                </select>
                            </td>
                            <th>단계</th>
                            <td>
                                <select id="level" name="level" onChange={onLevelChange}>
                                    <option value="">레벨</option>
                                    {selectedProgram ? selectedProgram.map(program => (
                                        <option key={program}>{program}</option>
                                    )) : ""}
                                </select>
                            </td>
                            <th>권</th>
                            <td>
                                <select id="book" name="book" onChange={onBookChange}>
                                    <option value="">권</option>
                                    {book ? book.map(book => (
                                        <option key={book}>{book}권</option>
                                    )) : ""}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" autoComplete="off" name="title" /></td>
                            <th>구분</th>
                            <td><input type="text" autoComplete="off" name="division" /></td>
                            <th>영역</th>
                            <td><input type="text" autoComplete="off" name="domain" /></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <table className="exam" style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th>레벨</th>
                            <td>
                                <select id="grade" name="grade" onChange={onGradeChange}>
                                    <option value="">단계</option>
                                    {grade ? grade.map(grade => (
                                        <option key={grade}>{grade}</option>
                                    )) : ""}
                                </select>
                            </td>
                            <th>시험지 파일</th>
                            <td><input type="file" name="testfile" /></td>
                        </tr>
                        <tr>
                            <th>문제 수</th>
                            <td><input type="number" placeholder="0" min='0' max='100' onChange={handleChange} /></td>
                            <th>해답지 파일</th>
                            <td><input type="file" name="answerfile" /></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>
                <h2>개념 정보</h2>
                <table className="exam" style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td><input type="text" autoComplete="off" name="type1" /></td>
                            <th>3</th>
                            <td><input type="text" autoComplete="off" name="type3" /></td>
                            <th>5</th>
                            <td><input type="text" autoComplete="off" name="type5" /></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><input type="text" autoComplete="off" name="type2" /></td>
                            <th>4</th>
                            <td><input type="text" autoComplete="off" name="type4" /></td>
                            <th>6</th>
                            <td><input type="text" autoComplete="off" name="type6" /></td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <br></br>
                <h2>문제 정보</h2>
                {state}
                <br></br>

            </div>
        </form>
    )
}

export default ExamPage
