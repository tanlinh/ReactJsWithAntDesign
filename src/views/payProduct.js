import React from 'react'
import Appheader from '../component/common/header';
import { Layout, Tag, Space, Table, Button, Pagination, notification } from 'antd';
import AppFooter from '../component/common/footer';
const { Header, Content, Footer } = Layout;

const columns = [
    {
        title: 'Name Product',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Amount',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Origin Product',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Money Total',
        key: 'tags',
        dataIndex: 'tags',

    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['3.300.00 Đ'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['3.300.00 Đ'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['3.300.00 Đ'],
    },
];


function payProduct() {
    return (
        <Layout className="mainLayout">
            <Header>
                <Appheader />
            </Header>
            <Content>
                <div id="card" className="block aboutBlock">
                    <div className="container-fluid">
                        <div className="contentHolder">
                            <h1>Confirm Payment Product</h1>
                        </div>
                        <Table columns={columns} dataSource={data} />
                        <br></br>
                        <div className="confirmPayment">
                            <Button type="primary" href="processPayment" size="large" danger>Payment Confirm</Button>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    )
}

export default payProduct
