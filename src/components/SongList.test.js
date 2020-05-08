import React from "react";
import { shallow, mount } from "enzyme";
import { combineReducers, createStore } from "redux";
import SongList from "./SongList";
import * as songActions from "../actions";

const initialState = {};
let component;
let store;
store = (state = initialState) => createStore(combineReducers(reducers), state);
describe("<songList/>", () => {
  beforeEach(() => {
    store.dispatch = jest.fn();
    component = shallow(<songList store={store} />);
  });

  test("renders the default correctly", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("when onclick on any song is called", () => {
  const isActive = 1;
  beforeEach(() => {
    jest.spyOn(songActions, "selectSong").mockReturnValue();
  });

  it("when on click on component is called", () => {
    const data = { title: "song1", duration: "4.30" };
    expect(store.dispatch).toHaveBeenCalledWith(songActions.selectSong(data));
  });
});
