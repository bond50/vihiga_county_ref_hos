import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";


const Person = ({src,names,description}) => (
  <Card>
    <Image src={src} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{names}</Card.Header>
      <Card.Description>
          {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Link to='/about/management/board'>
        <Icon name='facebook' />
      </Link>
        <Link to='/about/management/board'>
        <Icon name='twitter' />
      </Link>
        <Link to='/about/management/board'>
        <Icon name='whatsapp' />
      </Link>
        <Link to='/about/management/board'>
        <Icon name='phone' />
      </Link>
    </Card.Content>
  </Card>
)

export default Person