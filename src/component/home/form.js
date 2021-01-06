import React from 'react';
import {
    Form,
    Input,
    Button,
    Checkbox,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd'


function AppForm() {

    return (
        <div id = "form" className="block aboutBlock">
            <div className="container-fluid">
                <div className="contentHolder">
                    <h2>
                        Choose a plan to fit your needs
                </h2>
                    <p>Debitis itaque minima dolorum fuga aperiam inventore, quidem enim</p>
                </div>
                <>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item label="Input" rules={[
                            {
                                required: true,
                                message: 'Please enter your full name!'
                            }]
                        }>
                            <Input placeholder="Full Name" />
                        </Form.Item>
                        <Form.Item label="Select">
                            <Select>
                                <Select.Option value="demo">Demo</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="TreeSelect">
                            <TreeSelect
                                treeData={[
                                    { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Cascader">
                            <Cascader
                                options={[
                                    {
                                        value: 'zhejiang',
                                        label: 'Zhejiang',
                                        children: [
                                            {
                                                value: 'hangzhou',
                                                label: 'Hangzhou',
                                            },
                                        ],
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="DatePicker">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="InputNumber">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Switch">
                            <Switch />
                        </Form.Item>
                        <Form.Item label="Confirm">
                            <Checkbox>
                                I have read the <a href="a">agreement</a>
                            </Checkbox>
                        </Form.Item>
                    </Form>
                    <div className="contentHolder">
                        <Button type="primary" size="large" htmlType="submit">Submit</Button>
                    </div>
                </>
            </div>
        </div>

    );
}
export default AppForm;