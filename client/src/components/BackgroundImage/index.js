import React from "react";
import {withRouter} from 'react-router-dom';
class BackgroundImage extends React.Component {

    selectBackgound() {

        let image = "/images/1.jpg";
        const path = this.props.location.pathname;
        switch (path) {
          case "/dashboard":
            image = "/images/2.jpg";
        }
        return image;
      }

    render() {
        return <img className="bg" src={this.selectBackgound()} />
    }
}

export default withRouter(BackgroundImage);