import React, { useState } from "react";
import { Form, FormGroup, FormText, Input, Button } from "reactstrap";

const UploadPage = () => {
  const [imageFile, setImageFile] = useState(null);

  return (
    <Form
    //   onSubmit={

    //       // The function to call on submit goes here

    //   }
    >
      <FormGroup>
        <Input
        //   type="file"
        //   name="image-file"
        //   onChange={

        //       // The function to call when you have selected a file will be called here

        //   }
        />
        <FormText color="muted">
          Make sure the image being uploaded is a supported format.
        </FormText>
      </FormGroup>
      <Button type="submit" color="primary">
        Upload
      </Button>
    </Form>
  );
};

export default UploadPage;
