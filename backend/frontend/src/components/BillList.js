import React, { useState } from "react";
import "./Bill.css";
import { Link, useParams, Switch, Route } from "react-router-dom";
import { connect,} from "react-redux";

import { getItems } from "../store/actions/itemsActions";

function BillList({ items }) {
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  var ust = parseFloat(0.18);

  function Display(props) {
    return <label style={{ marginLeft: ".5rem" }}>{props.message}</label>;
  }

  return (
    <div className="bills">
      <div
        className="main-title"
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 14,
        }}
      >
        <h1>Bakery</h1>
        <h1>Company Gbr</h1>
        <h1>Oranienburger Straße 120</h1>
        <h1>10119 Berlin</h1>
      </div>

      <div className="bills-container">
        {/* pass in the details  */}
        <div className="item-list">
          {items &&
          items.items
            .filter((item) => item.id === Number(id))
            .map((item) => (
              <React.Fragment key={item.id}>
                <div className="bill-time">
                  <div className="bill">
                    <h4>
                      {" "}
                      <strong>Bill: </strong>
                      {item.billNumber}
                    </h4>
                  </div>

                  <div className="time">
                    <h4>
                      {" "}
                      <strong>Time: </strong>
                      {item.created_datetime}
                    </h4>
                  </div>
                </div>
                <div className="lines-time">
                  ------------------------------------------------------------------------------------------
                </div>

                {/* Counter  */}
                <div className="price-total">
                  <div className="head-title">
                    <div className="title">
                      <h3>
                        {" "}
                        <strong>Title: {item.title} </strong>
                      </h3>
                    </div>
                    <div className="counter" title="counter-text">
                      <strong>
                        <Display  message={counter} />x
                      </strong>
                    </div>
                    <div className="lines">------------</div>
                  </div>

                  <div className="increase">
                    <button onClick={() => setCounter(counter + 1)} title="btn-increment">+</button>
                  </div>
                  <div className="decrease">
                    <button onClick={() => setCounter(counter - 1)} title="btn-decrement">-</button>
                  </div>

                  {/* Price and total */}

                  <div className="price">
                    <h4>
                      <strong>Price: {parseFloat(item.price).toFixed(2)}€ </strong>
                    </h4>
                  </div>
                  <div className="a">A</div>

                  <div className="total">
                    <h4>Total: </h4>
                  </div>
                  <div className="total-price">
                    {parseFloat(item.price * counter).toFixed(2)}€
                  </div>
                  <div className="given">
                    <h4>Given: (iZettle)</h4>
                  </div>
                  <div className="given-price">
                    {parseFloat(item.price * counter).toFixed(2)}€
                  </div>
                  <div className="lines-taxes">
                    -------------------------------------------------------------------------------
                  </div>
                  <div className="gross">
                    <h4>
                      <strong>gross</strong>
                    </h4>
                  </div>
                  <div className="gross-price">{((parseFloat(item.price) * counter)).toFixed(2)}€</div>
                  <div className="taxes">
                    <h4>USt.%</h4>
                  </div>
                  <div className="percent">A=7%</div>
                  <div className="ust">
                    <h4>USt.</h4>
                  </div>
                  <div className="ust-percent">{(ust * counter).toFixed(2)} €</div>
                  {/* net - the USt */}
                  <div className="net">
                    <h4>net</h4>
                  </div>
                  <div className="net-result">
                   
                    {(parseFloat(item.price) * counter - parseFloat(0.18 * counter)).toFixed(2)} €
                   
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
        {/* Paragraph */}
        <div className="terminal">
          <p> Table:  Counter</p>
          <p> Terminal:  Terminal 1</p>
          </div>
       
        <div className="TSE-Transaktion ">
          <p>
            TSE-Transaktion 
          </p>
          <p>TSE-Signatur-Nr. </p>
          <p>
          TSE-Start 
          </p>
          <p>
          TSE-Stop 
          </p>
          <p>
          TSE-Seriennummer
          </p>
          <p>
          TSE-Zeitformat
          </p>
          <p>
          TSE-Signatur 
          </p>
          <p>
          TSE-Hashalgorithmus
          </p>
          <p>
          TSE Status 
          </p>
        </div>


        <div className="right-side">
          <p>
          1831
          </p>
          <p>
          98009
          </p>
          <p>
          2020-04-21T09:29:38.00000Z
          </p>
          <p>
          2020-04-21T09:29:50.00000Z
          </p>
          <p>
          5f2897cc074ae841330658eadd324661159f53b7ffd29215
          </p>
          <p>
          utcTime
          </p>
          <p>
          bXkPffFOcetbFokYrOqr/7EYrAc0PH6r
          </p>
          <p>
          ecdsa-plain-SHA256
          </p>
          <p>
          In evaluation
          </p>

        </div>
      

        <div className="de11">
        <p>Ust-Id: DE11111111</p>
        </div>
        





        {/* Button */}
      </div>

      <div className="button-path">
        <Link data-testid="analyse-receipt-path" to="/">
          <div className="button">
            <button data-testid="analyse-receipt"  className="main-button">Analyse Receipt</button>
          </div>
        </Link>
      </div>

      <Switch>
        <Route path="/bills/:id" />
      </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)  (BillList);


