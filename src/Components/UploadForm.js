import React, { useState } from 'react';
//import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';


const UploadForm = (props) => {
 
  const [state, setState] = useState({
    title: '',
    description: ''
  });
  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  const [file1, setFile1] = useState();
  function handleChange2(e) {
      console.log(e.target.files1);
      setFile1(URL.createObjectURL(e.target.files1[0]));
  }
  const [errorMsg, setErrorMsg] = useState('');


  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { title, description } = state;
      if (title.trim() !== '' && description.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('file1',file1);
          formData.append('title', title);
          formData.append('description', description);

          setErrorMsg('');
          await axios.post(`/video/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Access-Control-Allow-Origin": "*",
            }
          });
          props.history.push('/list');
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Control
                type="text"
                name="title"
                value={state.title || ''}
                placeholder="Enter title"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="description">
              <Form.Control
                type="textarea"
                name="description"
                value={state.description || ''}
                placeholder="Enter description"
                maxLength = "200"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <h2>Add Image:</h2>
            <input type="file" accept='image/jpeg,jpg,png' onChange={handleChange} name= 'file' />
            <h2>Add Video:</h2>
            <input type="file" accept='video/mp4,avi,mov'  name= 'file2' onChange={handleChange2} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default UploadForm;