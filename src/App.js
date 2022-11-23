import "./App.css";
import styled from "styled-components";
import Header from "./components/@common/Layout/Header";
import List from "./components/@common/Layout/List";

const PageStyle = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;
`;

const App = () => {
  return (
    <PageStyle>
      <Header />
      <List />
    </PageStyle>
  );
};

export default App;
