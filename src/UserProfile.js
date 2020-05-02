import React, { Component } from "react";
import "./userProfile.css";
import meme from "./meme.jpg";
import ProfileField from "./ProfileField"

class UserProfile extends Component {
    constructor() {
        super();

        this.state = {
            id: 2,
            name: "undefined user name",
            email: "undefined email",
            isInEditMode: false
        };
    };

    changeEditMode = () => {
        if (this.state.isInEditMode) {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: "testName01", email: "testEmail01", id: 2 })
            };
            fetch('http://localhost:5000/users', requestOptions);

        }
        this.setState({ isInEditMode: !this.state.isInEditMode });

    };

    updateName = e => {
        this.setState({
            name: e.target.value
        });
    };

    updateEmail = e => {
        this.setState({
            email: e.target.value
        });
    }

    componentDidMount() {
        let userid = this.state.id;
        fetch(`http://localhost:5000/users/${userid}`)
            .then((response) => response.json())
            .then((responseJson) => {
                const { name, email } = responseJson;
                this.setState({ name, email })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { name, email } = this.state;

        return (

            <div className="userProfile">
                <div className="myProfile-bar">
                    <p>My Profile</p>
                </div>
                <button className="edit-save-btn" onClick={this.changeEditMode}>{this.state.isInEditMode ? "Save" : "Edit"}</button>
                <div className="infos">
                    <div className="userName">
                        <ProfileField value={name} onChange={this.updateName} isEditing={this.state.isInEditMode} />
                    </div>
                    <div className="email">
                        <ProfileField value={email} onChange={this.updateEmail} isEditing={this.state.isInEditMode} />
                    </div>
                </div>
                <div className="infos2">
                    <div className="posts">posts</div>
                    <div className="services">services</div>
                    <div className="points">points</div>
                </div>
            </div>
        )
    }
}





export default UserProfile;
