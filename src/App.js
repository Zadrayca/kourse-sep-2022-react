import {Routes, Route} from "react-router-dom";

import './App.css';
import {AuthRequireLayout, MainLayout} from "./layouts";
import {UsersPage, HomePage, NotFoundPage, PostPage, CarsPage, LoginPage, RegisterPage} from "./pages";
import {CarsPage2} from "./pages/CarsPage2/CarsPage2";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>

                    <Route element={<AuthRequireLayout/>}>
                        <Route path={'cars2'} element={<CarsPage2/>}/>
                    </Route>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>

                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;