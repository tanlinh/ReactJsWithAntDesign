import React from 'react';
import { BackTop, Button } from 'antd';
function AppFooter() {

    return (

        <div className="container-fluid">
            <div className="footer">
                <div className="contentHolder">
                    <div className="logo" >
                        <i class="fab fa-google"></i>
                        <a href="https://www.google.com.vn/?hl=vi"> PAGE PURCHASE</a>
                    </div>
                    <p>Copyright © 2021 Technical Support</p>
                </div>
                <BackTop>
                    <Button type="primary" size="large">Back Top</Button>
                </BackTop>
            </div>
        </div>

    );
}

export default AppFooter;