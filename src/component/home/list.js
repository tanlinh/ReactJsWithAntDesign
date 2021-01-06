import React from 'react';
import { List, Card, Button } from 'antd';

const data = [
    {
        title: 'Title 1',
        a: "A",
        b: "A",
        c: "A",
        d: "A",

    },
    {
        title: 'Title 1',
        a: "A",
        b: "A",
        c: "A",
        d: "A",
    },
    {
        title: 'Title 1',
        a: "A",
        b: "A",
        c: "A",
        d: "A",
    },

];

function AppList() {
    return (
        <div id = "list" className="block aboutBlock">
            <div className="container-fluid">
                <div className="contentHolder">
                    <h2>
                        Choose a plan to fit your needs
                    </h2>
                    <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.title}>Card content
                                <p>{item.a}</p>
                                <p>{item.b}</p>
                                <p>{item.c}</p>
                                <p>{item.d}</p>
                                <p> <Button type="primary" size="large"> <i class="fab fa-google"></i> Primary Button</Button></p>
                            </Card>
                          
                        </List.Item>
                    )}
                />,
            </div>
        </div>
    );
}
export default AppList;