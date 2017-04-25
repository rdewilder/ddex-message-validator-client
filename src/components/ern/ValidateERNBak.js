import React from 'react';
import { Panel, Button, Row, Col, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class ValidateERN extends React.Component {
  constructor() {
    super();
    this.state = { ernFile: '' };
  }

  render() {
    return (
      <Panel header="Validate ERN" className="ern-validate-form-panel">
                <div className='actionButtons'>
                  <Form inline acceptCharset="utf-8" className="ern-validate-form" id="formERNValidate"
                      encType="multipart/form-data" id="formClassifyClaim">
                    <Row>
                      <Col lg={5} md={5} sm={5} xs={5}>
                        <FormGroup controlId="ernUpload">
                          <ControlLabel>Select an ERN for validation</ControlLabel>
                          <FormControl type="file" name="ernFile" placeholder="Choose ERN.."/>
                        </FormGroup>
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

export default ValidateERN;
