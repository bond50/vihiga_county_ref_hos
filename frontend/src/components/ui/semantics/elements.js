import React from 'react';
import {Grid,Segment} from "semantic-ui-react";

export const semParagraph = ({children}) => <p style={{fontSize: '1.33em'}}>{children}</p>
export const GridColumn = ({props,children}) => <Grid.Column {...props}>{children}</Grid.Column>
export const semSegment = (props) => <Segment {...props} vertical>{props.children}</Segment>


