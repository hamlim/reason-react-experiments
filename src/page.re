/* This is the basic component. */
type state = {counter: int, show: bool};
type action = 
  | Click
  | Clear
  | Toggle;
let component = ReasonReact.reducerComponent("Page");

let s = ReasonReact.stringToElement;

/* `make` is the function that mandatorily takes `children` (if you want to use
   `JSX). `message` is a named argument, which simulates ReactJS props. Usage:

   `<Page message="hello" />`

   Which desugars to

   `ReasonReact.element(Page.make(~message="hello", [||]))` */
let make = (~message, _children) => {
  ...component,
  initialState: () => {counter: 0, show: false},
  reducer: (action, state) => 
    switch action {
    | Click => ReasonReact.Update({...state, counter: state.counter + 1})
    | Clear => ReasonReact.Update({...state, counter: 0})
    | Toggle => ReasonReact.Update({...state, show: !state.show})
  },
  render: (self) => {
    let clickMessage = "Clicked " ++ string_of_int(self.state.counter) ++ " times(s)";
    <div>
      <div onClick=(self.reduce((_event) => Click))> {s(clickMessage)} </div>
      <button onClick=(self.reduce((_event) => Toggle))>(s("Toggle is " ++ (self.state.show ? "On" : "Off")))</button>
      <button onClick=(self.reduce(_event => Clear))>(s("Clear"))</button>
      <div>(s(message))</div>
    </div>
  }
};
