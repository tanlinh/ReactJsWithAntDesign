import React from 'react';
import { Anchor, Button, Menu } from 'antd';


import { SearchOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
const { Link } = Anchor;
const { SubMenu } = Menu;
function Appheader() {
    return (
        <div id="header" className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <i class="fab fa-google"></i>
                    <a href="http://localhost:3000/"> Page Purchase</a>

                </div>

                {/* <Anchor>
                    <Link href="#carousel" title="Home (Carousel)" />
                    <Link href="#form" title="Form" />
                    <Link href="#gird" title="Gird" />
                    
                    <Link href="#collapse" title="Collapse" />
                    <Link href="#list" title="List" />
                    <Link href="#card" title="Card" />
                    <Link href="#modal" title="Modal" />
                
                </Anchor> */}

                <Menu mode="horizontal" style={{ letterSpacing: 0 }} defaultSelectedKeys={['mail']}>
                    <Menu.Item key="mail" >
                        HOME
                   </Menu.Item>
                    {/* <SubMenu key="mail" title="HOME" style={{ fontSize: 13 }} mode="horizontal" >
                    </SubMenu> */}
                    <SubMenu title="DOWNLOAD" style={{ fontSize: 13 }} mode="" >
                        <Menu.Item key="setting:1">Left Slidebar</Menu.Item>
                        <Menu.Item key="setting:1">Right Slidebar</Menu.Item>
                        <Menu.Item key="setting:2">No Slide Full Width</Menu.Item>
                    </SubMenu>
                    <SubMenu title="VIEW PRO" style={{ fontSize: 13 }} mode="horizontal" >
                    </SubMenu>

                    <SubMenu title="LAYOUTS" style={{ fontSize: 13 }} mode="horizontal" >

                        <Menu.Item key="setting:1">Left Slidebar</Menu.Item>
                        <Menu.Item key="setting:1">Right Slidebar</Menu.Item>
                        <Menu.Item key="setting:2">No Slide Full Width</Menu.Item>

                    </SubMenu>
                    <SubMenu title="SHOP" style={{ fontSize: 13 }} mode="horizontal" >
                    </SubMenu>
                    <SubMenu title="BLOGS" style={{ fontSize: 13 }} mode="horizontal" >
                    </SubMenu>
                    <SubMenu title="PAGES" style={{ fontSize: 13, position: 'relative' }}>

                        <Menu.Item key="setting:1">Team</Menu.Item>
                        <Menu.Item key="setting:2">Contact Us</Menu.Item>

                    </SubMenu>
                </Menu>
                <div className="icon-header">
                    <SearchOutlined />&emsp;&emsp;
                    <ShoppingCartOutlined />&emsp;&emsp;
                    {/* <Button type="success" href="purchase" size="large">Purchase</Button> */}
                </div>
            </div>

        </div>

    );
}
export default Appheader;
