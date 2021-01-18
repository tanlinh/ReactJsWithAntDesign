import React from 'react';
import { Row, Col, Anchor } from 'antd';
const { Link } = Anchor;
const Items = [
    {

        key: <a class="fas fa-chart-pie" href = "/purchase"></a>,
        title: 'adsadsads',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    },
    {
        key: <a class="fas fa-chart-pie" href = "/purchase"></a>,
        title: '31wewqrqwerwerwef',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    },
    {
        key: <a class="fas fa-chart-pie" href = "/purchase"></a>,
        title: '31wewqrqwerwerwef',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    },
    {
        key: <a class="fas fa-chart-pie" href = "/purchase"></a>,
        title: '31wewqrqwerwerwef',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    }
]

function About() {

    return (
        <div id = "gird" className="block aboutBlock">
            <div className="container-fluid">
                <Row gutter={[16, 16]}>
                    {Items.map(item => {
                        return (
                            <Col span={6}>
                                <div className="content">
                                    <div className="icon">
                                        {item.key}
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    {item.content}
                                </div>
                                <br></br>
                                <div className="content">
                                    {item.readmore}
                                </div>
                            </Col>

                        );
                    })}
                </Row>


            </div>
        </div>
    );
}
export default About;