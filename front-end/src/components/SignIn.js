import React, { Component } from 'react'
import '../css/Form.css';
import axios from 'axios';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        };
        this.handleForm = this.handleForm.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    handleForm(e) {
        this.setState({
            [e.target.id]: e.target.files ? e.target.files[0] : e.target.value,
        });
    }
    signUp(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('username', this.state.username);
        data.append('password', this.state.password);

        const url = "http://localhost:5000/api/user-login";
        axios
            .post(url, data)
            .then((res) => {
                console.log(res);
                localStorage.setItem("sid", res.data.token);
                localStorage.setItem("pp", res.data.profile_pic);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="Form">
                <form className="Form-body">
                    <label>Username</label>
                    <input onChange={this.handleForm} type="text" placeholder="Username" id="username" />
                    <label>Password</label>
                    <input onChange={this.handleForm} type="password" name="" id="password" />
                    {/* <label>Verify Password</label>
                    <input onChange={this.handleForm} type="password" name="" id="vPassword" />
                    <label>Profile Image</label>
                    <input onChange={this.handleForm} type="file" name="" id="image" /> */}
                    <button onClick={this.signUp}>SignIn</button>
                </form>

            </div>
        )
    }
}
export default SignIn;