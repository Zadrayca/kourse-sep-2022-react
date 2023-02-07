import {Routes, Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {UsersPage, HomePage, NotFoundPage, PostPage, CarsPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;