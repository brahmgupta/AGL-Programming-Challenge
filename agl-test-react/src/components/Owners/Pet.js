// @flow
import React from "react";

type Props = {
  petName: string
};

const Pet = ({ petName }: Props) => {
  return (
    <li data-testid="pet" className="pet"> {petName}</li>
  );
};

export default Pet;
