import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../redux/action/action";
import Heaver from "../../components/heaver/Heaver";

function UserPage() {
    const dispatch = useDispatch();
    const { preloader } = useSelector((state) => state.Reducer);
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
    });
    const regExpGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const regExpFullName = /^[a-zA-Zа-яА-ЯёЁ]+(?: [a-zA-Zа-яА-ЯёЁ]+)*$/;
    const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (preloader) return <Heaver />;

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        const { fullName, email, username, password } = input;
        e.preventDefault();
        if (
            fullName.trim() === "" ||
            email.trim() === "" ||
            username.trim() === "" ||
            password.trim() === ""
        ) {
            return alert("Пожалуйста, заполните все поля");
        }
        if (
            !regExpGmail.test(email) ||
            !regExpFullName.test(fullName) ||
            !regExpPassword.test(password)
        )
            return alert("Пожалуйста, заполните все поля правильно");

        dispatch(fetchUserPosts(input));
    };
    return (
        <div>
            <Form onChange={handleChange}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Text className="text-muted">
                    <h6>Требования к паролю:</h6>
                    <ul>
                        <li>
                            Пароль должен содержать строчные и заглавные буквы.
                        </li>
                        <li>Пароль должен содержать хотя бы одну цифру.</li>
                        <li>Минимальная длина пароля — 5 символов.</li>
                    </ul>
                </Form.Text>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default UserPage;