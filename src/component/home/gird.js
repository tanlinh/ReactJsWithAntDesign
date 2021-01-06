import React from 'react';
import { Row, Col } from 'antd';

const Items = [
    {

        key: <i class="fas fa-chart-pie"></i>,
        title: '31wewqrqwerwerwef',
        content: 'adasdsdasd',
    },
    {
        key: <i class="fas fa-chart-pie"></i>,
        title: '31wewqrqwerwerwef',
        content: 'adasdsdasd',
    },
    {
        key: <i class="fas fa-chart-pie"></i>,
        title: '31wewqrqwerwerwef',
        content: 'adasdsdasd',
    },
    {
        key: <i class="fas fa-chart-pie"></i>,
        title: '31wewqrqwerwerwef',
        content: 'adasdsdasd',
    }
]

function About() {

    return (
        <div id = "gird" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">

                    <a href="https://www.google.com.vn/?hl=vi">Nav 2</a>
                    <br></br>
                    <p>ka;lsdk;álkdsakdlfdkjfakldsfkl</p>
                </div>
                <div className="contentHolder">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
                </div>
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
                              
                            </Col>

                        );
                    })}
                </Row>


            </div>
        </div>
    );
}
export default About;