import { Outlet } from "react-router-dom";
import Header from "../Pages/shere/Header";
import Container from "../Containter/Container";

const MainLayOut = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayOut;
