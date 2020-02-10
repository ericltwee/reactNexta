import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "react-graceful-image";
import Loader from "./Loader";
import { Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [images, setImages] = useState([]);
  //   const history = useHistory();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userInfo");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
      // } else {
      //   history.push("/");
      // }
    }
    axios({
      method: "GET",
      url: "https://insta.nextacademy.com/api/v1/images/me",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`
      }
    }).then(response => {
      setImages(response.data);
    });
  }, []);

  if (!currentUser) {
    return <Loader size="200px" />;
  }

  return (
    <div>
      <Container className="mt-5" fluid>
        <Row>
          <Col md={6}>
            <Image src={currentUser.profile_picture} alt="meeee" />
          </Col>
          <Col md={6}>
            <h1>{currentUser.username}</h1>
            <Button tag={Link} className="mt-4">
              Upload New Image
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <hr />
        {images.length > 0 ? (
          <div
          // className="w-100 mt-5"
          // style={{ columnCount: 3, columnGap: "1em" }}
          >
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  //   style={{ width: "100%", margin: "0 0 1em", display: "block" }}
                />
              );
            })}
          </div>
        ) : (
          <h1 className="mt-5">No Images</h1>
        )}
      </Container>
    </div>
  );
};
export default MyProfile;
