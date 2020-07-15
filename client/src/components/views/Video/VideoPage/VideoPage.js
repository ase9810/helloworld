import React, { useEffect, useState } from 'react'
import { Card, Col, Typography, Row } from 'antd';
import moment from 'moment';
import Axios from 'axios';

const { Title } = Typography;
const { Meta } = Card;

function VideoPage(props) {

    const [Videos, setVideos] = useState([])

    useEffect(() => {
        Axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos);
                    setVideos(response.data.videos)
                } else {
                    alert('비디오 가져오기를 실패했습니다.')
                }
            })
    }, []) //useEffect 뒤에 []는 이 함수가 한번만 사용됨을 의미한다

    const renderCards = Videos.map((video, index) => {
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return (
            <Col lg={6} md={8} xs={24} key={index}> {/*컬럼의 크기: 가장 클때 6, 중간 8, 가장 작을때 24*/}
                <a href={`/video/${video._id}`}>
                    <div style={{ position: 'relative' }}>
                        <img style={{ width: '100%' }} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />
                        <div className="duration">
                            <span>{minutes} : {seconds}</span>
                        </div>
                    </div>
                </a>
                <br />
                <Meta
                    title={video.title}
                    description=""
                />
                <span style={{ marginLeft: '3rem' }}>{video.views} views</span> - <span>{moment(video.createdAt).format("MMM Do YY")}</span>
            </Col>
        )
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2}>Recommended </Title>
            <hr />
            <Row gutter={[32, 16]}>
                {renderCards}

            </Row>
        </div>
    )
}

export default VideoPage
