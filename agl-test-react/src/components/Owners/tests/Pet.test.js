import React from "react";
import { render } from "@testing-library/react";
import Pet from "../Pet";

const mockPetName = "Garfield";

describe("<Pet />", () => {
  it("renders the component", () => {
    const container = render(<Pet petName={mockPetName} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render pets", () => {
    const { getByText } =  render(<Pet petName={mockPetName} />);
    const linkElement = getByText(/Garfield/i);
    expect(linkElement).toBeInTheDocument();
  });
});
