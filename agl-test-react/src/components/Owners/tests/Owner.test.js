import React from "react";
import { render } from "@testing-library/react";
import Owner from "../Owner";

const mockOwner = {
  ownerGender: "Male",
  catNames: ["Garfield", "Jim", "Max", "Tom"]
};

const mockOwnerWithNoPets = {
    ownerGender: "Male"
  };

describe("<Owner />", () => {
  it("renders the component", () => {
    const container = render(<Owner owner={mockOwner} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render All pets", () => {
    const { queryAllByTestId } = render(<Owner owner={mockOwner} />);
    expect(queryAllByTestId("pet").length).toBe(mockOwner.catNames.length);
  });

  it("should NOT render any pet", () => {
    const { queryAllByTestId } = render(<Owner owner={mockOwnerWithNoPets} />);
    expect(queryAllByTestId("pet").length).toBe(0);
  });
});
