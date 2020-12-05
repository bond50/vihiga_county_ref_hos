import React from 'react';

import { Icon,Header,Segment,Button} from "semantic-ui-react";
import {Link} from "react-router-dom";


const Tenders = () => <>
    <Segment placeholder>
    <Header icon>
      <Icon name='search' />
      We don't have any tender available now....
    </Header>
    <Segment.Inline>
      <Button primary as={Link} to='/'>Go Home</Button>
      <Button as={Link} to='media-center/vacancies' positive>Go to vacancy page</Button>
    </Segment.Inline>
  </Segment>
</>;

export default Tenders;