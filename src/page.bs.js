// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("Page");

function s(prim) {
  return prim;
}

function make(message, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function (self) {
      var clickMessage = "Clicked " + (Pervasives.string_of_int(self[/* state */2][/* counter */0]) + " times(s)");
      var match = self[/* state */2][/* show */1];
      return React.createElement("div", undefined, React.createElement("div", {
                      onClick: Curry._1(self[/* reduce */1], (function () {
                              return /* Click */0;
                            }))
                    }, clickMessage), React.createElement("button", {
                      onClick: Curry._1(self[/* reduce */1], (function () {
                              return /* Toggle */2;
                            }))
                    }, "Toggle is " + (
                      match !== 0 ? "On" : "Off"
                    )), React.createElement("button", {
                      onClick: Curry._1(self[/* reduce */1], (function () {
                              return /* Clear */1;
                            }))
                    }, "Clear"), React.createElement("div", undefined, message));
    });
  newrecord[/* initialState */10] = (function () {
      return /* record */[
              /* counter */0,
              /* show : false */0
            ];
    });
  newrecord[/* reducer */12] = (function (action, state) {
      switch (action) {
        case 0 : 
            return /* Update */Block.__(0, [/* record */[
                        /* counter */state[/* counter */0] + 1 | 0,
                        /* show */state[/* show */1]
                      ]]);
        case 1 : 
            return /* Update */Block.__(0, [/* record */[
                        /* counter */0,
                        /* show */state[/* show */1]
                      ]]);
        case 2 : 
            return /* Update */Block.__(0, [/* record */[
                        /* counter */state[/* counter */0],
                        /* show */1 - state[/* show */1]
                      ]]);
        
      }
    });
  return newrecord;
}

exports.component = component;
exports.s         = s;
exports.make      = make;
/* component Not a pure module */