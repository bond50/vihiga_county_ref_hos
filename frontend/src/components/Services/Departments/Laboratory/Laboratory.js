import React from 'react';
import AboutContainer from "../../../About/AboutContainer";
import {Header, Table, Label} from "semantic-ui-react";
import Footer from "../../../Footer/Footer";


class Laboratory extends React.Component {

    render() {
        return (

            <AboutContainer title='The Vihiga County Referral Hospital Laboratory'>
                <Header as='h4'>Accreditation</Header>
                <p>Not only do we have a well equipped Laboratory, but also talented staff who offer best
                    services in
                    the region. Our Laboratory is accredited as a medical testing laboratory upon satisfying the
                    requirement of <strong>ISO 15189:2012.</strong>. by KENAS. We offer all routinely daily tests,
                    blood
                    donor services and in case of referral we refer our clients to the following facilities: </p>
                <Table celled color='green' size='small' >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>TEST</Table.HeaderCell>
                            <Table.HeaderCell>REFERRED TO</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Histology/ Cytology samples</Table.Cell>
                            <Table.Cell>AGA KHAN HOSPITAL</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Viral Load</Table.Cell>
                            <Table.Cell>KEMRI-ALUPE</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Samples for PCR-EID</Table.Cell>
                            <Table.Cell>KEMRI-ALUPE</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Header as='h4'>Location</Header>
                <p>The Vihiga County Referral Hospital Laboratory is in kenya,Vihiga County,along kisumu-Kakamega
                    road,at Mbale Center ,within Vihiga County Referral Hospital, on basement next to X-ray unit</p>
                <Header as='h4'>Operating Hours</Header>
                <p>The Vihiga County Referral Hospital Laboratory provides a 24 hours service<strong>(Monday to
                    Sunday)</strong><br/>The shifts are as follows:</p>
                <Table celled color='green' size='small'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Days</Table.HeaderCell>
                            <Table.HeaderCell singleLine>Operating Hours</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon color='yellow'>Monday - Friday</Label>
                            </Table.Cell>
                            <Table.Cell>8:00 Am-6:30pm</Table.Cell>

                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon color='yellow'>Night Shift</Label>
                            </Table.Cell>
                            <Table.Cell>6:30 Pm-8:00 Am</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Label ribbon color='yellow'> Weekends and Public Holidays</Label>
                            </Table.Cell>
                            <Table.Cell>8:00 Am-6:30pm</Table.Cell>

                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell colSpan='2'>
                                <Header as='h6' inverted> We are always punctual</Header>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>

                <Header as='h4'>Services offered ,agreed turn around times and costs </Header>
                <Table celled size='small' compact color='green'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>TEST</Table.HeaderCell>
                            <Table.HeaderCell>COST</Table.HeaderCell>
                            <Table.HeaderCell>T.A.T</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Label ribbon pointing='below' color='yellow'>SEROLOGY</Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Salmonella Antigen Test</Table.Cell>
                            <Table.Cell>700</Table.Cell>
                            <Table.Cell>45 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Pregnancy Test</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Rheumatoid Factor Test</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>VDRL Test</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Brucellin Test</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Anti Streptolysin 'O' Test</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Helicobacter Pylori Test</Table.Cell>
                            <Table.Cell>500</Table.Cell>
                            <Table.Cell>45 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Crag Test</Table.Cell>
                            <Table.Cell>500</Table.Cell>
                            <Table.Cell>45 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>HbsAg Test</Table.Cell>
                            <Table.Cell>300</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Occult Blood</Table.Cell>
                            <Table.Cell>300</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>PITC</Table.Cell>
                            <Table.Cell>Free</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Label ribbon pointing='below' color='yellow'>HAEMATOLOGY</Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Hemoglobin Estimation</Table.Cell>
                            <Table.Cell>100</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Full Haemogram</Table.Cell>
                            <Table.Cell>500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Erythrocyte sedimentation Rate</Table.Cell>
                            <Table.Cell>100</Table.Cell>
                            <Table.Cell>90 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Sickling Test</Table.Cell>
                            <Table.Cell>300</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Peripheral Blood Film</Table.Cell>
                            <Table.Cell>300</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Label ribbon pointing='below' color='yellow'>BLOOD BANK</Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Blood For Cross-match</Table.Cell>
                            <Table.Cell>1000</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Blood For Blood Grouping</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Blood For Coombs/DU </Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Blood For antibodies screening</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Label ribbon pointing='below' color='yellow'>MICROBIOLOGY</Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CSF Analysis</Table.Cell>
                            <Table.Cell>500</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Indian ink</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Gram stain</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Gene Xpert</Table.Cell>
                            <Table.Cell>Free</Table.Cell>
                            <Table.Cell>24 hours</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>AAFB</Table.Cell>
                            <Table.Cell>Free</Table.Cell>
                            <Table.Cell>24 hours</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>HVS Gram Stain</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>40 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Semen Analysis</Table.Cell>
                            <Table.Cell>500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Label ribbon pointing='below' color='yellow'>CLINICAL CHEMISTRY</Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CD4 Analysis </Table.Cell>
                            <Table.Cell>Free</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Renal Functional Test</Table.Cell>
                            <Table.Cell>1300</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Liver Functional Test</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Blood Sugar</Table.Cell>
                            <Table.Cell>Free</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Urinalysis (Microscopy and Biochemistry)</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>HbA1c (Glycated hemoglobin)</Table.Cell>
                            <Table.Cell>2500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Bilirubin (Total and Direct)</Table.Cell>
                            <Table.Cell>600</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Electrolytes Sodium ion (Na+),Potassium(K+),Chloride(Cl-)</Table.Cell>
                            <Table.Cell>600</Table.Cell>
                            <Table.Cell>45 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>CSF Protein/Glucose</Table.Cell>
                            <Table.Cell>400</Table.Cell>
                            <Table.Cell>30 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Thyroid Function Test <em>(Thyroid Stimulating Hormone(TSH),Free
                                Triiodothyronine (FT3),free Thyroxine (FT4))</em></Table.Cell>
                            <Table.Cell>2500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Free Prostate Specific Antigen (PSA)</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Follicle stimulating Hormone (FSH)</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Luteinizing Hormone (LH)</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Alpha Feto Protein (AFP)</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Hepatitis B Surface Antigen (HBsAg)</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Hepatitis C Virus (HCV)</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Human Chronic Gonadotropin (HCG)</Table.Cell>
                            <Table.Cell>200</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>C-Reactive Protein(CRP)</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell colSpan={3}>
                                <Label ribbon pointing='below' color='yellow'>PARASITOLOGY</Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Blood Slide For Parasites</Table.Cell>
                            <Table.Cell>100 under 5 Years Free</Table.Cell>
                            <Table.Cell>60 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Stool For Ova And Cyst</Table.Cell>
                            <Table.Cell>100</Table.Cell>
                            <Table.Cell>45 minutes</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>HVS(Wet Prep)</Table.Cell>
                            <Table.Cell>1500</Table.Cell>
                            <Table.Cell>200 minutes</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                    </Table.Footer>
                </Table>

            </AboutContainer>


        );
    }
}

export default Laboratory;