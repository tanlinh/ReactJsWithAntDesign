import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function AppWork() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id = "modal" className="block worksBlock">
            <div className="container-fluid">
            <Button type="primary" size="large" onClick={showModal}>View Detail</Button>
                <div className="contentHolder" >
                    <h2>Work</h2>
                    <p>Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.</p>
                    
                    <>
                  
                      
                        <Modal title="Work Detail" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <p>Desginasdasdsads</p>
                            <p>Desginasdasdsads</p>
                            <p>Desginasdasdsads</p>
                            <p>Desginasdasdsads</p>
                        </Modal>
                    </>

                </div>

            </div>
        </div>
    );
}
export default AppWork;