import React from 'react';
import { Carousel } from 'antd';
import { Button } from 'antd';
function AppHero() {

    const Items = [
        {

            key: '1',
            title: 'Key Features and Benefits',
            content: 'Key Features and Benefits',
        },
        {
            key: '1',
            title: 'Key Features and Benefits',
            content: 'adaKey Features and Benefitssdsdasd',
        },
        {
            key: '1',
            title: 'Key Features and Benefits',
            content: 'Key Features and Benefits',
        }
    ]

    return (
        <div id = "carousel" className="heroBlock">
            <Carousel autoplay>
                {Items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className = "btnHolder">
                                    <Button type="primary" href="purchase" size="large">READ MORE</Button>
                                    {/* <Button>Default Button</Button>
                                    <Button type="dashed">Dashed Button</Button>
                                    <Button type="text">Text Button</Button>
                                    <Button type="link">Link Button</Button>
                                    <Button type="primary" size="large"> <i class="fab fa-google"></i> Primary Button</Button> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>,
        </div>

    );
}

export default AppHero;