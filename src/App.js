import {Routes, Route} from "react-router-dom";

import './App.css';
import {RouterEndpoints} from "./routes";
import {MainLayout} from "./layouts";
import {CommentsPage, HomePage, NotFoundPage, PostPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.posts} element={<PostPage/>}/>
                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}/>
                    <Route path={RouterEndpoints.noFound} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
