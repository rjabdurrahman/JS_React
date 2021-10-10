import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent/MainContent";
import RightSideBar from "./components/RightSidebar";
import styled from "@emotion/styled";
function Home() {
  const Main = styled.div`
    display: grid;
    grid-template-columns: 350px calc(100% - 550px) 200px;
  `
  return (
    <>
      <Main>
        <LeftSidebar />
        <MainContent />
        <RightSideBar />
      </Main>
    </>
  );
}

export default Home;
