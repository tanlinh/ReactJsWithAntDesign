import React from 'react';
import {
    Row, Col, Menu} from 'antd'
import Image1 from '../../assets/images/advanced-option.jpg';
const Items = [
    {

        key: Image1,
        title: 'adsadsads',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href="/purchase" style={{ color: '#67666A', fontWeight: 400 }}>READ MORE</a></u>
    },
    {
        key: Image1,
        title: '31wewqrqwerwerwef',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href="/purchase" style={{ color: '#67666A', fontWeight: 400 }}>READ MORE</a></u>
    },
    {
        key: Image1,
        title: '31wewqrqwerwerwef',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href="/purchase" style={{ color: '#67666A', fontWeight: 400 }}>READ MORE</a></u>
    },
    {
        key: Image1,
        title: '31wewqrqwerwerwef',
        content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        readmore: <u><a href="/purchase" style={{ color: '#67666A', fontWeight: 400 }}>READ MORE</a></u>
    }
]
function AppForm() {

    return (
        <div className="listproduct">
        <div id="form" className="block aboutBlock">
            <div className="container-fluid">
                <div className="contentHolder">
                    <h2>
                        PORTFOLIO
                </h2>
                    <p>List your sleek works with the help of Suffice</p>
                </div>
                <div  className = "menulistproduct">
                <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                    <Menu.Item key="mail">
                        <a href="#gridform">ALL</a>
                   </Menu.Item>
                    <Menu.Item key="app1" >
                        <a href="#gridform">PHOTOGRAPHY</a>
                   </Menu.Item>
                    <Menu.Item>
                        WEB DESIGN
                    </Menu.Item>
                </Menu>
                </div>
                <Row gutter={[32, 32]}>
                    {Items.map(item => {
                        return (
                            <Col span={6}>
                                <div id = "gridform" class="grid">
                                    <figure class="effect-julia">
                                        <img src={item.key} />
                                        <figcaption>
                                            <h2>Passionate <span>Julia</span></h2>
                                            <div>
                                                <p>{item.title}</p>
                                                <p>{item.title}</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div id="girdform" class="grid">
                                    <figure class="effect-julia">
                                        <img src={item.key} />
                                        <figcaption>
                                            <h2>Passionate <span>Julia</span></h2>
                                            <div>
                                                <p>{item.title}</p>
                                                <p>{item.title}</p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </Col>

                        );
                    })}
                </Row>
            </div>
        </div>
</div>
    );
}
export default AppForm;