import React from 'react';
import {Header, List} from "semantic-ui-react";
import AboutContainer from '../About/AboutContainer'

const Covid = () => (
    <AboutContainer title='about Corona virus'>
        <Header as='h3'>What is Covid 19 ?</Header>
        <p> Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered
            coronavirus.
            Most people who fall sick with COVID-19 will experience mild to moderate symptoms and
            recover
            without special treatment.
        </p>
        <Header as='h3'>What does Covid stand for ?</Header>
        <p>
            'CO' stands for corona, 'VI' for virus, and 'D' for disease. Formerly, this disease was
            referred
            to
            as '2019 novel coronavirus' or '2019-nCoV.' The COVID-19 virus is a new virus linked to the
            same
            family of viruses as Severe Acute Respiratory Syndrome (SARS) and some types of common cold.
        </p>
        <Header as='h3'>How dangerous is COVID-19 ?</Header>
        <p>Although for most people COVID-19 causes only mild illness, it can make some people very ill.
            More
            rarely, the disease can be fatal. Older people, and those with pre- existing medical
            conditions
            (such as high blood pressure, heart problems or diabetes) appear to be more vulnerable.</p>

        <Header as='h3'>How does the Virus spread ?</Header>
        <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an
            infected
            person coughs, sneezes, or exhales.You can be infected by breathing in the virus if you are
            within
            close proximity of someone who has COVID-19, or by touching a contaminated surface and then
            your
            eyes, nose or mouth.</p>
        <Header as='h3'>What are the symptoms of Covid 19 ?</Header>

        <p> Most common symptoms:</p>
        <List as='ol' style={{textTransform: 'capitalize', fontSize: "1.33em"}}>
            <List.Item as='li' content=' fever'/>
            <List.Item as='li' content=' dry cough'/>
            <List.Item as='li' content=' tiredness'/>
        </List>

        <p>Less common symptoms:</p>
        <List as='ol' style={{textTransform: 'capitalize', fontSize: "1.33em"}}>
            <List.Item as='li' content=' sore throat'/>
            <List.Item as='li' content='diarrhoea'/>
            <List.Item as='li' content='conjunctivitis'/>
            <List.Item as='li' content=' headache'/>
            <List.Item as='li' content=' loss of taste or smell'/>
            <List.Item as='li' content='  a rash on skin, or discolouration of fingers or toes'/>
        </List>
        <p>Serious symptoms:</p>
        <List as='ol' style={{textTransform: 'capitalize', fontSize: "1.33em"}}>
            <List.Item as='li' content='difficulty breathing or shortness of breath'/>
            <List.Item as='li' content='chest pain or pressure'/>
            <List.Item as='li' content=' loss of speech or movement'/>
        </List>
        <Header as='h3'>How long does it take for symptoms of the coronavirus
            disease
            to appear ?
        </Header>

        <p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to
            show,
            however it can take up to 14 days</p>

        <Header as='h3'>Is temperature screening effective to detect the
            coronavirus
            disease ?</Header>
        <p>Temperature screening alone, at exit or entry, is not an effective way to stop international
            spread,
            since infected individuals may be in incubation period, may not express apparent symptoms
            early
            on
            in the course of the disease, or may dissimulate fever through the use of antipyretics; in
            addition,
            such measures require substantial investments for what may bear little benefits.</p>

        <Header as='h3'>What can I do to protect myself and others from
            COVID-19 ?</Header>
        <List as='ol' style={{textTransform: 'capitalize', fontSize: "1.33em"}}>
            <List.Item as='li'>
                Cover your cough or sneeze with a tissue, then throw the tissue in the trash.
            </List.Item>
            <List.Item as='li'>
                Avoid close contact with people who are sick.
            </List.Item>
            <List.Item as='li'>
                Clean and disinfect frequently touched objects and surfaces every day
            </List.Item>
            <List.Item as='li'>
                Avoid touching your eyes, nose, and mouth.
            </List.Item>
            <List.Item as='li'>
                Wash your hands often with soap and water .
            </List.Item>
            <List.Item as='li'>
                Stay home when you are sick.
            </List.Item>
            <List.Item as='li'>
                Sanitize with alcohol based sanitizer
            </List.Item>
            <List.Item as='li'>
                Wear face Masks
            </List.Item>
            <List.Item as='li'>
                Avoid kissing, handshaking and hugging
            </List.Item>
            <List.Item as='li'>
                keep social distance of at least 2metres
            </List.Item>
        </List>

        <Header as='h3'>Is there a vaccine available ?</Header>
        <p>At the moment there is no vaccine for COVID 19</p>
        <Header as='h3'>How to keep Your Immunity strong ?</Header>
        <List as='ol' style={{fontSize: "1.33em"}}>
            <List.Item as='li' content='Get enough sleep'/>
            <List.Item as='li' content='Avoid smoking'/>
            <List.Item as='li' content='control stress'/>
            <List.Item as='li' content=' Eat whole grains, fruits and vegetables for balance diet'/>
            <List.Item as='li' content='  Exercise regularly.'/>
            <List.Item as='li' content=' control your blood pressure'/>
        </List>
    </AboutContainer>

);

export default Covid;