// @flow
import React from "react";
import Pet from "./Pet";

type OwnerType = {
  ownerGender: string,
  catNames: Array<string>
};

type PropsType = {
  owner: OwnerType
};

const Owner = ({ owner }: PropsType) => {
  return (
    <li data-testid="owner" className="owner">
      {owner.ownerGender}
      <ul className="pet-list">
        {owner.catNames &&
          owner.catNames.map(petName => (
            <Pet key={petName} petName={petName} />
          ))}
      </ul>
    </li>
  );
};

export default Owner;
