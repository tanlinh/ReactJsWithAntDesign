import React from 'react'
import {  Menu, Dropdown} from "antd";
import Image2 from '../../assets/images/bg-hero.jpg';
import { DownOutlined } from '@ant-design/icons';
import Image1 from '../../assets/images/advanced-option.jpg';
function CarouselAuto() {

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
      );

    return (
			
			
				<div class="grid">
					<figure class="effect-julia">
                    <img src={Image1} />
						<figcaption>
							<h2>Passionate <span>Julia</span></h2>
							<div>
								<p>Julia dances in the deep dark</p>
								<p>She loves the smell of the ocean</p>
								<p>And dives into the morning light</p>
							</div>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
				
		

      
    );
}

export default CarouselAuto
