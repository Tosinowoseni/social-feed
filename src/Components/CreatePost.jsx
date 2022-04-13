import React, { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import './CreatePost.css';
function CreatePost(props) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleNameOnChange = (e) => {
    setName(e.target.value);
  };
  const handleCommentOnChange = (e) => {
    setComment(e.target.value);
  };
  const handleClearAll = () => {
    localStorage.clear('payload');
    window.location.reload();
  };

  return (
    <Form
      className='post-form'
      onSubmit={(e) => {
        e.preventDefault();

        props.handleNewComment(name, comment);
      }}
    >
      <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type='name'
            placeholder='Name'
            onChange={(e) => handleNameOnChange(e)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='mb-3' controlId='formHorizontalPassword'>
        <Form.Label column sm={2}>
          Post
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            as='textarea'
            type='Post'
            placeholder='Post'
            onChange={(e) => handleCommentOnChange(e)}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3'>
        <Col sm={{ span: 2, offset: 8 }}>
          <Button id='button' type='submit'>
            Create-post
          </Button>
        </Col>
        <Col sm={{ span: 2, offset: 8 }}>
          <Button id='button-clear-all' onClick={handleClearAll}>
            Clear-all
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CreatePost;