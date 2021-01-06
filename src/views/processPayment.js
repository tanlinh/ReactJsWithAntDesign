import React from 'react'
import Appheader from '../component/common/header';
import { Layout, Steps, Button } from 'antd';
import AppFooter from '../component/common/footer';
const { Header, Content, Footer } = Layout;
const { Step } = Steps;
function processPayment() {
    return (
        <Layout className="mainLayout">
            <Header>
                <Appheader />
            </Header>
            <Content>
                <div id="card" className="block aboutBlock">
                    <div className="container-fluid">
                        <div className="contentHolder">
                            <h1>History Delivery</h1>
                        </div>
                        <Steps current={1}>
                            <Step title="Start" description="This is a description." />
                            <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                            <Step title="Waiting" description="This is a description." />
                            <Step title="Finish" description="This is a description." />
                        </Steps>,
                        <div className="confirmPayment">
                            <Button type="primary" href="payProduct" size="large" >Back Order Products</Button>
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

export default processPayment
