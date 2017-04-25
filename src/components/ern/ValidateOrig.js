import React from 'react';

import { Panel, Button, Input, ListGroup, ListGroupItem, Row, Col, Form, ButtonToolbar, Tabs, Tab, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class ValidateErn extends React.Component {
  render() {
    return (
      <Panel header="Validateddd ERN" className="ycm-claims-info-panel">
                <div className='actionButtons'>
                  <Form acceptCharset="utf-8" action="http://localhost:8080/api/validate" method="POST"
                  className="form-inline" encType="multipart/form-data" id="formClassifyClaim">
                    <Row>
                      <Col lg={5} md={5} sm={5} xs={5}>
                        <FormGroup controlId="ernUpload">
                          <ControlLabel>Select an ERN for validation</ControlLabel>
                          <input type="file" name="erdn-file" placeholder="Choose ERN.."/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={5} md={5} sm={5} xs={5}>

                        <Button type="submit">
                              Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
      </Panel>
    );
  }
}

export default ValidateErn;
