import React, { Component } from 'react'
import '../css/Form.css';
import axios from 'axios';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            vPassword: '',
            image: null
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
        data.append('varifiedPassword', this.state.vPassword);
        data.append('profileImage', this.state.image);

        const url = "http://localhost:5000/api/user-register";
        axios
            .post(url, data)
            .then((res) => {
                alert(res.data.msg);
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
                    <label>Verify Password</label>
                    <input onChange={this.handleForm} type="password" name="" id="vPassword" />
                    <label>Profile Image</label>
                    <input onChange={this.handleForm} type="file" name="" id="image" />
                    <button onClick={this.signUp}>SignUp</button>
                </form>

            </div>
        )
    }
}
export default SignUp;