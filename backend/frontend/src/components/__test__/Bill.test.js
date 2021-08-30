import { fireEvent } from "@testing-library/react";
import { render, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import BillList from "../BillList";
import * as React from "react";




//Wrapper 
const downshift = {
  isActive: true
}

const renderBillList = props =>
  render(BillList({...downshift, ...props})).  

const btn = wrapper => wrapper.queryByTitle("counter-text")

  // will display 1 by default because there will be already an item when the page renders


  test("display counter text", () => {
    const wrapper = renderBillList({isActive: true})
    
  
    expect(btn(wrapper)).toBe(1)
    fireEvent.click(btn)
  });





// will display 1 by default because there will be already an item when the page renders

// configure({ adapter: new Adapter() });
// it("display counter text", () => {
//   const { queryByTitle } = render(<BillList />);

//   const btn = queryByTitle("counter-text");

//   expect(btn.innerHTML).toBe(0);
//   fireEvent.click(btn);
// });


// Button increments the price value by +1
it("increment counter", () => {
  const { queryByTitle } = render(<BillList />);
  const btnIncrement = queryByTitle("btn-increment");
  expect(btnIncrement.innerHTML).toBe(1);
  fireEvent.click(btnIncrement);
});

// Button decrements the price value by -1

it("decrement counter", () => {
  const { queryByTitle } = render(<BillList />);

  const btnDecrement = queryByTitle("btn-decrement");

  expect(btnDecrement.innerHTML).toBe(-1);
  fireEvent.click(btnDecrement);
});




