import React from "react";
import styled, { css } from "styled-components";
import { RELATIONSHIPS } from "constants/card";
import { getSecondTitle, getAddressName, getPersonName } from "utils/common";
import like from "assets/icons/like.svg";
import star from "assets/icons/star.svg";
import photo from "assets/room.jpg";
import InteractiveIcon from "./InteractiveIcon";
import CardWrapper from "./CardWrapper";

/**
 * Карточка квартиры
 */
export default ({ info = {}, add, remove, isFavorite }) => {
  const { type, id, attributes, relationships } = info;

  return (
    <CardWrapper isFavorite={isFavorite}>
      <img src={photo} alt={`Room ${id} photo`} />
      <InteractiveIcon
        src={isFavorite ? star : like}
        onClick={() => (isFavorite ? remove(id) : add(id))}
      />
      <CardInfo>
        <Title>{attributes.title}</Title>
        <SecondTitle>{getSecondTitle(attributes, type)}</SecondTitle>
        <AddressDesc>
          <span>Адрес:</span> {getAddressName(attributes.address)}
        </AddressDesc>
        <Desc>
          <span>{RELATIONSHIPS[relationships.type]}: </span>
          {getPersonName(relationships.attributes)}
        </Desc>
      </CardInfo>
    </CardWrapper>
  );
};


const CardInfo = styled.div`
  padding: 20px 30px 30px;

  @media (max-width: 1200px) {
    padding: 10px 15px 10px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  ${TextOverflow};

  @media (max-width: 1200px) {
    font-size: 15px;
  }
`;
const SecondTitle = styled.div`
  font-size: 12px;
  margin-bottom: 35px;
`;
const Desc = styled.div`
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
  overflow: hidden;
  ${TextOverflow};
  span {
    opacity: 0.6;
  }
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;
const AddressDesc = styled(Desc)`
  height: 2.5em;
`;

const TextOverflow = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
