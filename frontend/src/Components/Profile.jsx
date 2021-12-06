// import React, { Component } from "react";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Outlet,
//     Link,
//   } from "react-router-dom";
// import "./Profile.css";

// const Profile = () => {
//     return(
//         <div></div>
//     );
// }

// export default Profile;

import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
    console.log(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;