import React from 'react'
import Appheader from '../component/common/header';
import AppFooter from '../component/common/footer';
import { Table, Tag, Space, Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
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
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

function detail() {
    return (
        <Layout className="mainLayout">
            <Header>
                <Appheader />
            </Header>
            <Content>
                <div id="card" className="block aboutBlock">
                    <div className="container-fluid">
                        <div className="contentHolder">
                            <h1>Customers Information</h1>
                        </div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </div>
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    )
}

export default detail
