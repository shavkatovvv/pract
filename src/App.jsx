import { useGetPhonesQuery } from "./redux/service/phone";
import { MainLayout } from "./layout/main-layout";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { UsersCard } from "./components/users";

function App() {
    const { data, isLoading } = useGetPhonesQuery();

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/app" element={<MainLayout />}>
                    <Route index element={<UsersCard />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
