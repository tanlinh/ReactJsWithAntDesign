import React from 'react';
import { Row, Col } from 'antd'
import { Card } from 'antd';
import Image1 from '../../assets/images/advanced-option.jpg';
const { Meta } = Card;
const Items = [
    {
        image: Image1,
        title: "salkdjsadjlska",
    },
    {
        image: Image1,
        title: "salkdjsadjlska",
    },
    {
        image: Image1,
        title: "salkdjsadjlska",
    },
    {
        image: Image1,
        title: "salkdjsadjlska",
    },
]
function AppFeature() {

    return (
        <div id = "card" className="block aboutBlock">
            <div className="container-fluid">
                <div className="contentHolder">
                    <h2>OUR TEAM</h2>
                    <p>Meet the awesome people behind our wall</p>
                </div>
           
                <Row gutter={[16, 16]}>
                
                    {Items.map(item => {
                        return (
                            <Col span={6} > 
                             <Card
                                hoverable
                                cover={<img className="comment-customer" alt="example" src={item.image} />}
                            >
                                <div className="content">
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                                </div>
                            </Card>,
                               {/* <img className="comment-customer" src={item.image} /> */}
                            </Col>
                        );
                    })}
                
                </Row>
               
            </div>
        </div>
    );
}

export default AppFeature;