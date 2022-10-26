import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as GetResultActions from "../actions/GetResultActions";
import "./GetResult.css";

class GetResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      name: "",
      price: "",
      image: "",
    };
  }

  refreshList() {
    fetch("http://localhost/test2/pub/rest/V1/showproduct/simple", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ films: data });
      });
  }

  render() {
    const { actions } = this.props;
    const { films } = this.state;
    return (
      <Fragment>
        <div>
          {/* <button
            onClick={() => {
              this.setState({ films: data });
            }}
          >
            Get item - right
          </button> */}
          <button onClick={() => this.refreshList()}>Get item - false</button>
        </div>
        <div className="container">
          {films.map((film) => (
            <Box name={film.name} price={film.price} image={film.image} />
          ))}
        </div>
      </Fragment>
    );
  }
}

function Box(props) {
  const { name, price, image } = props;
  var src = "http://localhost/test2/pub/media/catalog/product";
  return (
    <React.Fragment>
      <div className="component">
        <img src={src + image} alt="Image" width="200px" height="200px"></img>
        <p>{name}</p>
        <p>${parseInt(price)}</p>
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    films: state.getResultReducer.films,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GetResultActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetResult);
