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

]
function AppFeature() {

    return (
        <div id = "card" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>

                <Row gutter={[16, 16]}>
                    {Items.map(item => {
                        return (
                            <Col span={8} >  <Card
                                hoverable
                              
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>,</Col>
                        );
                    })}
                </Row>
                <Row gutter={[16, 16]}>
                    {Items.map(item => {
                        return (
                            <Col span={8} >  <Card
                                hoverable
                              
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>,</Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;