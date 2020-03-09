import React from 'react';
import { render } from '@testing-library/react';
import OwnerList from '../index';

const mockOwners = [{"ownerGender":"Male","catNames":["Garfield","Jim","Max","Tom"]}];

describe("<OwnerList />", () => {
  it("renders the component", () => {
    const container = render(<OwnerList ownerWithPets={mockOwners} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render All owners gender", () => {
    const { queryAllByTestId } = render(<OwnerList ownerWithPets={mockOwners} />);
    expect(queryAllByTestId("owner").length).toBe(mockOwners.length);
  });

  it("should NOT render any pet", () => {
    const { queryAllByTestId } = render(<OwnerList />);
    expect(queryAllByTestId("owner").length).toBe(0);
  });
});
