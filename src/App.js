import {Routes, Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {CommentsPage, HomePage, NotFoundPage, PostPage, CatsAndDogsPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={''} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'catsanddogs'} element={<CatsAndDogsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;