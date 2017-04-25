import React from 'react';
import {Grid} from 'react-bootstrap';
import ValidateERN2 from '../ern/ValidateERN2';

class Body extends React.Component {

  render() {

    return (
      <Grid className="validator-body">
        <ValidateERN2 />
    </Grid>
    );
  }
}



export default Body;
