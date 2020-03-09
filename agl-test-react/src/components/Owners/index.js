// @flow
import React from "react";
import Owner from "./Owner";

type OwnerType = {
  ownerGender: string,
  catNames: Array<string>
};

type Props = {
  ownerWithPets: Array<OwnerType>
};

export default ({ ownerWithPets }: Props) => {
  return (
    <ul className="owner-list">
      {ownerWithPets &&
        ownerWithPets.map(owner => (
          <Owner key={owner.ownerGender} owner={owner} />
        ))}
    </ul>
  );
};