import React, { useState, useEffect } from "react";
import styled from "styled-components";
import serverData from "dataBase/entities";
import Wrapper from "components/Wrapper";
import Loader from "components/Loader";
import Card from "components/Card";

export default () => {
  const [data, setData] = useState(null);
  const [favoriteArr, setFavoriteArr] = useState([]);

  useEffect(() => {
    // Иммитация запроса на сервер и получение данных
    setTimeout(() => {
      setData(serverData);
    }, 1000);
  }, []);

  const addFavoriteItem = (id) => {
    setFavoriteArr((arr) => [...arr, id]);
  };

  const removeFavoriteItem = (id) => {
    let newArr = [...favoriteArr];
    newArr.splice(newArr.indexOf(id), 1);
    setFavoriteArr([...newArr]);
  };

  return (
    <>
      <Title>Квартиры будущего (★ {favoriteArr.length})</Title>
      {!data ? (
        <Loader />
      ) : (
        <Container>
          {data.response.map((item) => (
            <Card
              info={item}
              key={item.id}
              add={addFavoriteItem}
              remove={removeFavoriteItem}
              isFavorite={favoriteArr.includes(item.id)}
            />
          ))}
        </Container>
      )}
    </>
  );
};

const Title = styled.h1`
  text-align: center;
  margin: 50px 10px;

  @media (max-width: 947px) {
    font-size: 20px;
    margin: 28px 10px;
  }
`;
const Container = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  > div {
    margin : 20px;
  }
  @media (max-width: 947px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
