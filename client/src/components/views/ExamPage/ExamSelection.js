import React, { useState, useEffect } from 'react'
import { Select } from 'antd';

const { Option } = Select;
const program = ['nc', 'ap', 'newgifted', 'winimath', 'rootone', 'special'];
const level = {
    nc: ['nclv1', 'nclv2', 'nclv3', 'nclv4', 'nclv5', 'nclv6'],
    ap: ['aplv1', 'aplv2', 'aplv3', 'aplv4', 'aplv5', 'aplv6'],
    newgifted: ['ngtlvg', 'ngtlvi', 'ngtlvf', 'ngtlvt', 'ngtlve', 'ngtlvd'],
    winimath: ['wini1', 'wini2', 'wini3'],
    rootone: ['root1', 'root2', 'root3'],
    special: ['vacti', 'brain', 'other']
};

function ExamSelection() {
    const [state, setState] = useState([])
    const [book, setBook] = useState([])
    const [grade, setGrade] = useState([])

    useEffect(() => {
        setState({
            selectedProgram: "",
        })
    }, [])


    const handleProvinceChange = value => {
        if (value === "nc" || value === "ap" || value === "newgifted") {
            setBook(['1','2','3','4','5','6'])
            if(value === "nc") {
                setGrade(['Power','Jump'])
            } else if(value === "ap") {
                setGrade(['해','별','달'])
            } else if(value === "newgifted") {
                setGrade(['공통'])
            }
        }
        
        else if(value === "winimath") {
            setBook(['1','2','3','4','5','6','7','8','9','10','11','12'])
            setGrade(['공통'])
        }
        else if (value === "root") {
            setBook(['1','2','3','4'])
            setGrade(['Prime', 'Power'])
        }
        else {
            setBook([])
            setGrade([])
        }
        setState({
            selectedProgram: level[value],
            selectedLevel: level[value][0],
            selectedBook: book.length>0?book[0]:"1",
            selectedGrade: []
        });
        
        console.log('a')
    };

    const onSecondCityChange = value => {
        if (value.indexOf("nc") > -1 || value.indexOf("ap") > -1 || value.indexOf("ngt") > -1) {
            setBook(['1','2','3','4','5','6'])
            if(value.indexOf("nc") > -1) {
                setGrade(['Power','Jump'])
            } else if(value.indexOf("ap") > -1) {
                setGrade(['해','별','달'])
            } else if(value.indexOf("ngt") > -1) {
                setGrade(['공통'])
            }
        }
        else if(value === "wini1" || value === "wini2") {
            setBook(['1','2','3','4','5','6','7','8','9','10','11','12'])
            setGrade(['공통'])
        }
        else if (value === "wini3") {
            setBook(['1','2'])
            setGrade(['공통'])
        }
        else if (value.indexOf("root") > -1) {
            setBook(['1','2','3','4'])
            setGrade(['Prime', 'Power'])
        }
        else {
            setBook([])
            setGrade([])
        }

        setState({
            ...state,
            selectedLevel: value,
            selectedBook: book[0],
            selectedGrade: []
        });
        
        console.log('b')
    };

    const onBookChange = value => {
        setState({
            ...state,
            selectedBook: value,
        });
        console.log('c')
    };

    const onGradeChange = value => {
        setState({
            ...state,
            selectedGrade: value,
        });
        console.log('c')
    };

    const { selectedProgram } = state;
    console.log(state)

    return (
        <div>
            <Select
                placeholder="프로그램"
                style={{ width: 120 }}
                onChange={handleProvinceChange}
            >
                {program.map(province => (
                    <Option key={province}>{province}</Option>
                ))}
            </Select>
            <Select
                placeholder="레벨"
                style={{ width: 120 }}
                value={state.selectedLevel}
                onChange={onSecondCityChange}
            >
                {selectedProgram?selectedProgram.map(program => (
                    <Option key={program}>{program}</Option>
                )):""}
            </Select>
            <Select
                placeholder="권"
                style={{ width: 120 }}
                value={state.selectedBook}
                onChange={onBookChange}
            >
                {book?book.map(book => (
                    <Option key={book}>{book}권</Option>
                )):""}
            </Select>
            <Select
                placeholder="단계"
                style={{ width: 120 }}
                value={state.selectedGrade}
                onChange={onGradeChange}
            >
                {grade?grade.map(grade => (
                    <Option key={grade}>{grade}</Option>
                )):""}
            </Select>
        </div>
    );

}

export default ExamSelection