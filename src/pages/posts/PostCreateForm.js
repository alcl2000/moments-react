import React, { useState } from "react";
import {Form, Button, Row, Col, Container, FormLabel} from "react-bootstrap";
import upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PostCreateForm() {

  const [errors, setErrors] = useState({});


  const textFields = (
    <div className="text-center">
        <Form.Group  controlId="title">
            <FormLabel>
                Title
            </FormLabel>
            <Form.Control
                type="text"
                name="title"
            />
        </Form.Group>
        <Form.Group  controlId="content">
            <FormLabel>
                Content
            </FormLabel>
            <Form.Control
                as="textarea"
                rows={6}
                name="content"
            />
        </Form.Group>
    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                <Asset src={upload} message="Click or Tap to upload an image"/>
                </Form.Label>

            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;