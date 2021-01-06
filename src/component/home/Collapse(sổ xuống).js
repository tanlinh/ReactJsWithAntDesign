import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
}
function AppAskQuestion() {
    const text = `
    A dog is a type of domesticated animal.`;
    return (
        <div id = "collapse" className="block aboutBlock">
            <div className="container-fluid">
                <div className="contentHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p>
                </div>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>,
            </div>
        </div>
    );
}
export default AppAskQuestion;