import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/action/action";
import Heaver from "../../components/heaver/Heaver";

function MainPage() {
    const dispatch = useDispatch();
    const { preloader } = useSelector((state) => state.Reducer);
    const regExpName = /^a-zA-Z+$/i;
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
    });

    const formValue = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setUser({
            ...user,
            [name]: value,
        });
        console.log(user);
    };

    const addUser = (event) => {
        event.preventDefault();
        if (
            user.name.trim() === "" ||
            user.username.trim() === "" ||
            user.email.trim() === ""
        ) {
            return alert("Пожалуйста, заполните все поля");
        }
        if (regExpName.test(!user.name)) return alert("Имя должно состоять только из букв");

        dispatch(fetchUserData(user));
    };

    if (preloader) return <Heaver />;
    return (
        <Container>
            <Form>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group
                            className="mb-3"
                            controlId="username"
                            onChange={formValue}
                        >
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={formValue}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button
                            type="submit"
                            variant="success"
                            className="w-100"
                            onClick={addUser}
                        >
                            register user
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default MainPage;