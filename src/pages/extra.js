/*<FormGroup>
                  <Label for="exampleUrl">Url</Label>
                  <Input
                    type="url"
                    name="url"
                    id="exampleUrl"
                    placeholder="url placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDatetime">DateTime</Label>
                  <Input
                    type="datetime"
                    name="datetime"
                    id="exampleDatetime"
                    placeholder="datetime placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleColor">Color</Label>
                  <Input
                    type="color"
                    name="color"
                    id="exampleColor"
                    placeholder="color placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelectMulti">Select Multiple</Label>
                  <Input type="select" name="selectMulti" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" /> Option one is this and that—be sure
                    to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Check me out
                  </Label>
                </FormGroup>
                <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Form Grid</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="with a placeholder"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="password"
                      name="password"
                      placeholder="password placeholder"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleSelect" sm={2}>
                    Select
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="select" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleSelectMulti" sm={2}>
                    Select Multiple
                  </Label>
                  <Col sm={10}>
                    <Input type="select" name="selectMulti" multiple />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Text Area
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleFile" sm={2}>
                    File
                  </Label>
                  <Col sm={10}>
                    <Input type="file" name="file" />
                    <FormText color="muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </FormText>
                  </Col>
                </FormGroup>
                <FormGroup tag="fieldset" row>
                  <Label for="checkbox2" sm={2}>
                    Radio
                  </Label>
                  <Col sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" /> Option one is this
                        and that—be sure to include why it's great
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="radio2" /> Option two can be
                        something else and selecting it will deselect option one
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio2" disabled /> Option
                        three is disabled
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="checkbox2" sm={2}>
                    Checkbox
                  </Label>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" /> Check me out
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Form Validation</CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Input with success</Label>
                  <Input valid />
                  <FormFeedback>
                    <a href="https://github.com/twbs/bootstrap/issues/23372">
                      A bug
                    </a>{' '}
                    fixed in (the currently unreleased) (
                    <a href="https://github.com/twbs/bootstrap/pull/23377">
                      PR
                    </a>
                    ) bootstrap{' '}
                    <a href="https://github.com/twbs/bootstrap/issues/23278">
                      v4 beta-2
                    </a>{' '}
                    shows invalid-feedback with is-valid inputs.
                  </FormFeedback>
                  <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Input with danger</Label>
                  <Input valid={false} />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                  <FormText>Example help text that remains unchanged.</FormText>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Hidden Labels</CardHeader>
            <CardBody>
              <Form inline>
                <FormGroup>
                  <Label for="exampleEmail" hidden>
                    Email
                  </Label>
                  <Input type="email" name="email" placeholder="Email" />
                </FormGroup>{' '}
                <FormGroup>
                  <Label for="examplePassword" hidden>
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>{' '}
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Inline Form</CardHeader>
            <CardBody>
              <Form inline>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>{' '}
                  <Input
                    type="email"
                    name="email"
                    placeholder="something@idk.cool"
                  />
                </FormGroup>{' '}
                <FormGroup>
                  <Label for="examplePassword">Password</Label>{' '}
                  <Input
                    type="password"
                    name="password"
                    placeholder="don't tell!"
                  />
                </FormGroup>{' '}
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Inline Checkboxes</CardHeader>
            <CardBody>
              <Form>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> Some input
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input type="checkbox" /> Some other input
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSearch">Search</Label>
                  <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="search placeholder"
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Input Grid Sizing</CardHeader>
            <CardBody>
              <Form>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2} size="lg">
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="lg"
                      bsSize="lg"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleEmail2" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail2"
                      placeholder="default"
                    />
                  </Col>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
         <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Input Sizing</CardHeader>
            <CardBody>
              <Form>
                <Input className="mb-2" placeholder="lg" bsSize="lg" />
               
                <Input className="mb-2" placeholder="sm" bsSize="sm" />
                <Input className="mb-2" type="select" bsSize="lg">
                  <option>Large Select</option>
                </Input>
                <Input className="mb-2" type="select">
                  <option>Default Select</option>
                </Input>
                <Input className="mb-2" type="select" bsSize="sm">
                  <option>Small Select</option>
                </Input>
              </Form>
            </CardBody>
          </Card>
        </Col>

        </Row>
       */