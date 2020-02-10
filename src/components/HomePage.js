import React from "react";
import { Col, Card, CardBody, CardTitle, Container, Row } from "reactstrap";
import UserImages from "../components/UserImages";
import Image from "react-graceful-image";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const HomePage = ({ users, isLoading }) => {
  if (isLoading) {
    return <Loader size="250px" />;
  }
  return (
    <Container>
      <Row>
        {users.map(user => {
          return (
            <Col key={user.id} md={12}>
              <Card
                style={{ backgroundColor: "transparent", border: "3px solid" }}
                className="my-3"
              >
                <CardBody>
                  <Col>
                    <Image
                      className="col-md-3 my-2 rounded-circle"
                      src={user.profileImage}
                      alt={user.username}
                    />
                    <CardTitle
                      tag={Link}
                      to={`/user/${user.id}/${user.username}`}
                    >
                      {user.username}
                    </CardTitle>
                  </Col>
                  <Row>
                    <Col>
                      <div>
                        <UserImages userId={user.id} />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomePage;
