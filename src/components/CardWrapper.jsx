import styled from "styled-components";

export default styled.div`
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
