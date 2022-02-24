import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard/index"
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>

  );
}
