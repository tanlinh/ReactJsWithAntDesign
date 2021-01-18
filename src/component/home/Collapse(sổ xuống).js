import React from 'react';
import { Carousel } from 'antd';
import Image1 from '../../assets/images/advanced-option.jpg';
function AppAskQuestion() {

    const Items = [
        {
            image: Image1,
            key: '1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            title: 'Maria Perez',
            contentcomment: 'Web Master',
        },
        {
            image: Image1,
            key: '1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            title: 'Maria Perez',
            contentcomment: 'Web Master',
        },
        {
            image: Image1,
            key: '1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            title: 'Maria Perez',
            contentcomment: 'Web Master',
        }
    ]
    return (
        <div className="comment">
            <div id="collapse" className="block aboutBlock ">
                <div className="container-fluid">
                    <div className="contentHolder">
                        <h2>WHAT OUR CLIENTS SAY</h2>
                        <p>See what they are saying about us</p>
                    </div>
                    <Carousel autoplay>
                        {Items.map(item => {
                            return (
                              
                                    <div className="content">
                                    <img className="comment-customer" src={item.image} />
                                        <br></br>
                                        <p>{item.comment}</p>
                                        <h3>{item.title}</h3>
                                        <p>{item.contentcomment}</p>
                                    </div>
                                
                            );
                        })}
                    </Carousel>,
            </div>
            </div>
        </div>
    );
}
export default AppAskQuestion;