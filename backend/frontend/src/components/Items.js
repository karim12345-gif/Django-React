import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../store/actions/itemsActions";
import { Link } from "react-router-dom";
import "./Items.css";

function Items({ getItems, items }) {
  useEffect(() => {
    getItems();
  }, []);



  return (
    <div>
      <div className="container">
        <div
          className="image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            width: 100,
          }}
        >
          <img src="http://i.stack.imgur.com/yZlqh.png" alt="" />
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="item-preview">
            {
            items &&
              items.items.
              map((item) => (
                <div key={item.id}>
                  <h4>
                    ID: <Link to={`/bills/${item.id}`}> {item.id}
                      <button data-testid="button-4" className="button4">Analyse Receipt</button>
                    </Link>
                  </h4>
                </div>
              ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);


