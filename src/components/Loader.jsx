import React from "react";
import Loader from "react-loader-spinner";
import Wrapper from "components/Wrapper";

export default () => (
  <Wrapper>
    <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
  </Wrapper>
);
