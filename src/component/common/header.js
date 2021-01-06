import React from 'react';
import { Anchor, Button } from 'antd';
const { Link } = Anchor;

function Appheader() {
    return (
        <div id="header" className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <i class="fab fa-google"></i>
                    <a href="http://localhost:3000/"> Page Purchase</a>
                </div>
                {/* <Menu mode="horizontal" defaultSelectedKeys={['nav1']}>
                    <Menu.Item key="nav1">Home</Menu.Item>
                    <Menu.Item key="purchase"><a href="/purchase">Purchase</a></Menu.Item>
                    <Menu.Item key="form">form</Menu.Item>
                    <Menu.Item key="gird">gird</Menu.Item>
                    <Menu.Item key="collapse">collapse</Menu.Item>
                </Menu> */}
                <Anchor>
                    <Link href="#carousel" title="Home (Carousel)" />
                    <Link href="#form" title="Form" />
                    <Link href="#gird" title="Gird" />
                    <Link href="#collapse" title="Collapse" />
                    <Link href="#list" title="List" />
                    <Link href="#card" title="Card" />
                    <Link href="#modal" title="Modal" />
                    {/* <Link href="purchase" title="Purchase" /> */}
                </Anchor>,
                <Button type="success" href="purchase" size="large">Purchase</Button>
            </div>
        </div>
    );
}
export default Appheader;
