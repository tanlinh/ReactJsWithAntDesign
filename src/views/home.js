import React from 'react';
import AppHero from '../component/home/Carousel(chuyentrang)';
import About from '../component/home/gird';
import AppFeature from '../component/home/card';
import AppWork from '../component/home/modal';
import AppAskQuestion from '../component/home/Collapse(sổ xuống)';
import AppList from '../component/home/list';
import AppForm from '../component/home/form';
function AppHome() {

    return (
        <div>
            <AppHero />
            <About />
            <AppFeature/>
            <AppWork/>
            <AppAskQuestion/>
            <AppList/>
            <AppForm/>
        </div>

    );
}

export default AppHome;