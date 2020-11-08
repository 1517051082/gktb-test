import React, { Component, Fragment } from "react";

class Image extends Component {
  render() {
    return (
      <Fragment>
        <div class="carousel-item active">
          <img
            src="https://i.ytimg.com/vi/N78hkh-GRoY/maxresdefault.jpg"
            className="d-block w-100"
            alt=""
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="https://www.suarawajarfm.com/wp-content/uploads/2016/03/PAROKI-MARI-RATU-DAMAI-TELUK-BETUNG.jpg"
            className="d-block w-100"
            alt=""
          ></img>
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ytimg.com/vi/I32hFuNt14Y/hqdefault.jpg?v=5f75a018"
            className="d-block w-100"
            alt=""
          ></img>
        </div>
      </Fragment>
    );
  }
}

export default Image;
