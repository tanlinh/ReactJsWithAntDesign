
import Appheader from '../component/common/header';
import { Layout, Button, Row, Col, Card, Pagination, notification } from 'antd';
import AppFooter from '../component/common/footer';
import Image from '../assets/images/bg-works.jpg';


const openNotification = () => {
    notification.open({
        message: 'Notification Product',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
function AppPurchase() {

    const Items = [
        {
            image: Image,
            title: "Product 1",
            price: "123.120Đ",
            button: <Button type="success" size="large" href="payProduct">Add Product</Button>,
            detail: <Button type="primary" href="detail" size="middle"> Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 2",
            price: "123.120Đ",
            button: <Button type="success" onClick={openNotification} size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 3",
            price: "123.120Đ",
            button: <Button type="success" href="purchase" size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 4",
            price: "123.120Đ",
            button: <Button type="success" href="purchase" size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 5",
            price: "123.120Đ",
            button: <Button type="success" href="purchase" size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 6",
            price: "123.120Đ",
            button: <Button type="success" href="purchase" size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 7",
            price: "123.120Đ",
            button: <Button type="success" href="purchase" size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        },
        {
            image: Image,
            title: "Product 8",
            price: "123.120Đ",
            button: <Button type="success" href="purchase" size="large">Add Product</Button>,
            detail: <Button type="primary" href="purchase" size="middle">Detail</Button>,
            comment: <a href="/comment">View Customers Purchase</a>
        }
    ]
    return (
        <Layout className="mainLayout">
            <Header>
                <Appheader />
            </Header>
            <Content>
                <div id="card" className="block aboutBlock">
                    <div className="container-fluid">
                        <div className="contentHolder">
                            <h1>List Product </h1>
                        </div>
                        <Row gutter={[40, 32]}>
                            {Items.map(item => {
                                return (
                                    <Col span={6} >
                                        <Card hoverable cover={<img alt="example" src={item.image} />}>
                                            <Meta title={item.title} description={item.price} />
                                            <br></br>
                                            {item.button} {item.detail}
                                            <br></br>
                                            <br></br>
                                            {item.comment}
                                        </Card>
                                    </Col>
                                )
                            })}
                            <Pagination defaultCurrent={6} total={100} />
                        </Row>
                    </div>
                </div>
            </Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
}
export default AppPurchase;