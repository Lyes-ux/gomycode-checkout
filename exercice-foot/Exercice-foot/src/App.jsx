import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import TeamID from "./pages/TeamID";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index Component={Home} />
          <Route path="/teams" Component={Teams} />
          <Route path="/teams/:teamId" Component={TeamID} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
