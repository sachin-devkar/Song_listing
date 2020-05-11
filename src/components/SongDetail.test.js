import React from "react";
import { shallow } from "enzyme";
import { SongDetail } from "./SongDetail";

const props = {
  song: { title: "song1", duration: "4.30" },
};

describe("SongDetail", () => {
  const songdetailComp = shallow(<SongDetail {...props} />);

  it("renders the song", () => {
    expect(songdetailComp.find("#title").text()).toEqual(props.song.title);
  });
});
