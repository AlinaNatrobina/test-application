import React from "react";
import styled from "styled-components";
// import "styles/style.scss";
import photo from "assets/room.jpg";
import { TYPES, RELATIONSHIPS } from "constants/card";
import { getSecondTitle, getAddressName, getPersonName } from "utils/common";

export default ({ info = { attributes: {}, relationships: {} } }) => {

  const {
    type,
    id,
    attributes,
    relationships,
  } = info;

  return (
    <CardWrapper>
      <img src={photo} alt={`Room ${id} photo`} />
      <CardInfo>
        <Title>{attributes.title}</Title>
        <SecondTitle>{getSecondTitle(attributes, type)}</SecondTitle>
        <Desc>{getAddressName(attributes.address)}</Desc>
        <Desc>
          {RELATIONSHIPS[relationships.type]}: {getPersonName(relationships.attributes)}
        </Desc>
      </CardInfo>
    </CardWrapper>
  );
};

const CardWrapper = styled.div``;
const CardInfo = styled.div``;
const Title = styled.div``;
const SecondTitle = styled.div``;
const Desc = styled.div``;
