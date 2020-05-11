import React from "react";
import { shallow } from "enzyme";
import { SongList } from "./SongList";

export const songs = [
  { title: "song1", duration: "4.30" },
  { title: "song3", duration: "3.30" },
  { title: "song4", duration: "5.30" },
  { title: "song5", duration: "8.30" },
];

const props = { songs };

describe("Songlist", () => {
  const app = shallow(<SongList {...props} />);

  it("renders the correct number of songs", () => {
    expect(app.find("button").length).toEqual(songs.length);
  });

  it("title the songs correctly", () => {
    app.find("#content").forEach((Title, index) => {
      expect(Title.text()).toEqual(songs[index].title);
    });
  });
});
