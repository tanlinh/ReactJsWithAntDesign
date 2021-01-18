import React from 'react';
import AppHero from '../component/home/Carousel(chuyentrang)';
import About from '../component/home/gird';
import AppFeature from '../component/home/card';
import AppWork from '../component/home/modal';
import AppAskQuestion from '../component/home/Collapse(sổ xuống)';
import AppList from '../component/home/list';
import AppForm from '../component/home/form';
import AppCarouselAuto from '../component/home/CarouselAuto';
import ImageSlider from '../component/home/Slider';
function AppHome() {

    return (
        <div>
            <AppHero />
            <About />
            <AppForm/>
            <AppFeature/>
            {/* <AppWork/> */}
            <AppAskQuestion/>
            {/* <AppList/> */}
            {/* <AppCarouselAuto/> */}
       
        </div>

    );
}

export default AppHome;