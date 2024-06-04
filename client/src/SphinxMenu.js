import React from "react";
import {Container, Card, CardHeader, CardBody, Row, Col, FormGroup, Label, Input, Button} from "reactstrap";
function SphinxMenu() {
  return (
    <>
      <Container>
        <Row>
          <Col
            lg="10"
            md="12"
            className="mx-auto"
          >
          <Card
            className="mt-4"
          >
            <CardHeader
              className="text-center"
            >
              <h1 variant="h5">Sphinx Script</h1>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="sphinxInput">
                  Input
                </Label>
                <Input
                  id="sphinxInput" 
                  type="textarea"
                  className="p-1"
                  style={{
                    border: "1px solid black"
                  }}
                />
              </FormGroup>

              <Row>
                <Col 
                  xs="12"
                  md="6"
                  className="mb-3"
                >
                  <Button color="success" block>
                    Encrypt
                  </Button>
                </Col>

                { ' ' }

                <Col 
                  xs="12"
                  md="6"
                  className="mb-3"
                >
                  <Button color="danger" block>
                    Decrypt
                  </Button>
                </Col>
              </Row>


              <FormGroup>
                <Label for="sphinxOutput">
                  Output
                </Label>
                <Input 
                  id="sphinxOutput" 
                  type="textarea"
                  className="p-1"
                  style={{
                    border: "1px solid black"
                  }}
                  disabled
                /> 
              </FormGroup>

            </CardBody>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SphinxMenu;
