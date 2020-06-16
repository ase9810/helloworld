import React, { useState } from 'react'
import { Button, Input } from 'antd';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';

const { TextArea } = Input;

function Comments(props) {
    const videoId = props.postId;

    const user = useSelector(state => state.user);
    const [Comments, setComments] = useState("");

    const handleClick = (event) => {
        setComments(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        //무분별한 이벤트 방지
        event.preventDefault();

        const variables = {
            content: Comments,
            writer: user.userData._id,
            postId: videoId
        }

        Axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.result);
                    console.log(props);
                    setComments("");
                    props.refreshFunction(response.data.result);
                } else {
                    alert("댓글을 저장하지 못했습니다.")
                }
            })
    }

    return (
        <div>
            <br />
            <p>Replies</p>
            <hr />

            {/* Comment Lists */}
            {props.comments && props.comments.map((comment, index) => (
                (!comment.responseTo &&
                <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={videoId}/>
                )
            ))}

            {/* Root Comment Form */}

            <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                <TextArea
                    style={{ width: '100%', borderRadius: '5px' }}
                    onChange={handleClick}
                    value={Comments}
                    placeholder="코멘트를 작성해 주세요"
                />
                <br />
                <Button style={{ width: '20%', height: '52px' }} onClick={onSubmit}>Submit</Button>
            </form>
        </div>
    )
}

export default Comments
