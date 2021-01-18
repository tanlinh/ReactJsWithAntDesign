import React from 'react';
import { BackTop, Button, Row, Col } from 'antd';
function AppFooter() {
    const Items = [
        {

            key: <p style={{color:'white'}}>ABOUT US</p>,
            title: 'adsadsads',
            content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            readmore: <u><a href="/purchase">READ MORE</a></u>
        },
        {
            key: <p style={{color:'white'}}>ABOUT US</p>,
            title: '31wewqrqwerwerwef',
            content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            readmore: <u><a href="/purchase">READ MORE</a></u>
        },
        {
            key: <p style={{color:'white'}}>ABOUT US</p>,
            title: '31wewqrqwerwerwef',
            content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            readmore: <u><a href="/purchase">READ MORE</a></u>
        },
        {
            key: <p style={{color:'white'}}>ABOUT US</p>,
            title: '31wewqrqwerwerwef',
            content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            readmore: <u><a href="/purchase">READ MORE</a></u>
        }
    ]

    return (

        <div className="container-fluid">
            <div className = "footer">
                <Row gutter={[16, 16]}>
                    {Items.map(item => {
                        return (
                            <Col span={6}>
                                <div className="title-footer">
                                    {item.key}
                                </div>
                                <div className="content1">
                                    {item.content}
                                </div>
                            </Col>

                        );
                    })}
                </Row>


            </div>
            <BackTop>
                <Button type="primary" size="large">Back Top</Button>
            </BackTop>

        </div>

    );
}

export default AppFooter;