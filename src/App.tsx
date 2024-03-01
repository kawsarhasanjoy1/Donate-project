import MainLayOut from "./Layout/MainLayOut";
import { useAppSelector } from "./Redux/hook";

function App() {
  const mode = useAppSelector((state) => state.darkMode.mode);
  return (
    <div className={`${mode ? "bg-black text-white" : "bg-white text-black"}`}>
      <MainLayOut />
    </div>
  );
}

export default App;
