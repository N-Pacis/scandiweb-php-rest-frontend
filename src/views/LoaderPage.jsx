import React from "react";
import styled from "styled-components";
import LoaderImage from "../assets/loader.gif"
import "../styles/loader.css";

const LoaderPage = () => {
  return (
    <Container id="loader">
        <img src={LoaderImage} alt="Loader" className="loader"/> 
    </Container>
  );
};

const Container = styled.div`
  padding-top: 0%;
  width: 100%;
  height: 100vh;
  overflow-y:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export default LoaderPage;
