import React, { useState, useEffect } from "react";
import styled from "styled-components";
import serverData from "dataBase/data";
import Wrapper from "components/Wrapper";
import Loader from 'components/Loader';
import Card from "components/Card";

export default () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData(serverData);
    }, 3000)
  }, []);

  return (
    <PageWrapper>
      <Title>Квартирочки</Title>
      {!data ? (
        <Loader />
      ) : (
        <Container>
          {data.response.map((item) => (
            <Card info={item} key={item.id} />
          ))}
        </Container>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.div``;
const Title = styled.h1``;
const Container = styled(Wrapper)``;
