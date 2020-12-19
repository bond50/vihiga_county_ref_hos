import React from 'react';
import Layout from "../hocs/Layout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomepageLayout from "../components/Home/HomePageLayOut";
import Contact from "../components/Contact/ContactPageLayout";
import ScrollToTop from "../components/scrollTop";
import Covid from "../components/Covid19/Covid";
import Roles from "../components/About/Roles";
import Plan from "../components/About/Plan";
import HealthGoals from "../components/About/HealthGoals";
import NeighBoring from "../components/About/NeighBoring";
import Projects from "../components/About/Projects/Projects";
import Partners from "../components/About/Projects/Partners";
import Vision from "../components/About/MissionVision/Vision";
import CoreValues from "../components/About/MissionVision/CoreValues";
import Mission from "../components/About/MissionVision/Mission";
import Management from "../components/About/Management/management";
import Organogram from "../components/About/Management/Organogram";
import NotFound from "../components/404";
import Directorates from "../components/Services/Departments/Directorates";
import Pharmacy from "../components/Services/Departments/Pharmacy";
import Radiology from "../components/Services/Departments/Radiology";
import Accident from "../components/Services/Departments/Accident";
import Icu from "../components/Services/Departments/ICU";
import Ambulance from "../components/Services/Departments/Ambulance";
import Nursing from "../components/Services/Departments/Nursing";
import Laboratory from "../components/Services/Departments/Laboratory/Laboratory";
import Downloads from "../components/MediaCenter/Downloads";
import Events from "../components/MediaCenter/Events";
import Gallery from "../components/MediaCenter/Gallery";
import Press from "../components/MediaCenter/Press";
import Publications from "../components/MediaCenter/Publications";
import Vacancies from "../components/MediaCenter/Vacancies";
import Tenders from "../components/Tenders/Tenders";
import Training from "../components/Services/Training/training";
import Hand from "../components/Covid19/Hand";
import Preparedness from "../components/Covid19/Preparedness";
import HealthRecords from "../components/Services/Departments/HealthRecords";
import Blog from "../components/blog/Blog";


const App = () => {
    return (
        <BrowserRouter>

                <Layout>
                    <ScrollToTop>
                        <Switch>

                            <Route path='/' exact component={HomepageLayout}/>
                            <Route path='/contact' exact component={Contact}/>
                            <Route path='/covid19/covid' exact component={Covid}/>
                            <Route path='/about/roles' exact component={Roles}/>
                            <Route path='/about/plan' exact component={Plan}/>
                            <Route path='/about/health-goals' exact component={HealthGoals}/>
                            <Route path='/about/neighbor' exact component={NeighBoring}/>
                            <Route path='/about/projects/project' exact component={Projects}/>
                            <Route path='/about/projects/partners' exact component={Partners}/>
                            <Route path='/about/vision' exact component={Vision}/>
                            <Route path='/about/core-values' exact component={CoreValues}/>
                            <Route path='/about/mission' exact component={Mission}/>
                            <Route path='/about/management/board' exact component={Management}/>
                            <Route path='/about/management/organogram' exact component={Organogram}/>

                            <Route path='/services/departments/directorates' exact component={Directorates}/>
                            <Route path='/services/departments/pharmacy' exact component={Pharmacy}/>
                            <Route path='/services/departments/laboratory' exact component={Laboratory}/>
                            <Route path='/services/departments/radiology' exact component={Radiology}/>
                            <Route path='/services/departments/ac' exact component={Accident}/>
                            <Route path='/services/departments/icu' exact component={Icu}/>
                            <Route path='/services/departments/ambulance' exact component={Ambulance}/>
                            <Route path='/services/departments/nursing' exact component={Nursing}/>
                            <Route path='/services/departments/records' exact component={HealthRecords}/>

                            <Route path='/media-center/downloads' exact component={Downloads}/>
                            <Route path='/media-center/events' exact component={Events}/>
                            <Route path='/media-center/gallery' exact component={Gallery}/>
                            <Route path='/media-center/press' exact component={Press}/>
                            <Route path='/media-center/publications' exact component={Publications}/>
                            <Route path='/media-center/vacancies' exact component={Vacancies}/>

                            <Route path='/tenders' exact component={Tenders}/>
                            <Route path='/contact' exact component={Contact}/>
                            <Route path='/training' exact component={Training}/>

                            <Route path='/covid-19/hand' exact component={Hand}/>
                            <Route path='/covid-19/covid' exact component={Covid}/>
                            <Route path='/covid-19/prep' exact component={Preparedness}/>

                            <Route path='/blog'  component={Blog}/>



                            <Route component={NotFound}/>
                        </Switch>
                    </ScrollToTop>
                </Layout>

        </BrowserRouter>
    )
};

export default (App);


