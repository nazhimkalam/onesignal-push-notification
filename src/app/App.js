import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <img
        src="https://media.onesignal.com/cms/_1200x630_crop_center-center_82_none/OneSignal-Facebook.png"
        alt=""
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #E54B4D;

  img {
    object-fit: contain;
    height: 300px;
  }

`;
