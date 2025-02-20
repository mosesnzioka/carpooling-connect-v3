import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/Home/home";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUp";
import Fullpoolpage from "./pages/fullpool/fullpool";
import MainHomePage from "./pages/mainHomePage/mainhomepage";
import Allpoolspage from "./pages/allpoolspage/allpoolspage";
import Notifications from "./pages/requests/reguestsPage";
import { Toaster } from "sonner";

import Createpoolpage from "./pages/createpoolpage/createpoolpage";
import MyProfile from "./pages/my-profile-page/myProfilePage";
import MyPoolsPage from "./pages/mypoolspage/mypoolspage";

import "./App.css";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Toaster position="bottom-center" richColors />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<MainHomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/createpool" element={<Createpoolpage />} />
          <Route path="/allpools" element={<Allpoolspage />} />
          <Route path="/pools" element={<MainHomePage />} />
          <Route path="/pool/:id" element={<Fullpoolpage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/mypools" element={<MyPoolsPage/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
