import React from "react";
import styled, { css } from "styled-components";
import { RELATIONSHIPS } from "constants/card";
import { getSecondTitle, getAddressName, getPersonName } from "utils/common";
import like from "assets/icons/like.svg";
import star from "assets/icons/star.svg";
import photo from "assets/room.jpg";

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

const CardWrapper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  flex-grow: 1;
  flex-basis: 270px;
  min-width: 270px;
  max-width: 400px;
  transition: all 0.1s;
  filter: ${({ isFavorite }) =>
    isFavorite
      ? "drop-shadow(0px 0px 10px rgba(26, 103, 26, 0.5))"
      : "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.08))"};

  img:first-child {
    width: 100%;
    border-radius: 6px 6px 0px 0px;
  }
`;
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
const InteractiveIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  cursor: pointer;
  transition: all 0.1s;
  :hover {
    width: 40px;
    top: 8px;
    right: 8px;
  }
`;

const TextOverflow = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
