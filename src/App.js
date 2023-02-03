import {Route, Routes} from "react-router-dom";

import './App.css';
import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";
import {RouterEndpoints} from "./routes/routes";

function App() {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
                    <Route path={RouterEndpoints.albums} element={<AlbumsPage/>}/>

                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                        <Route path={RouterEndpoints.postId} element={<PostPage/>}/>
                    </Route>

                    <Route path={RouterEndpoints.noFound} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}


export default App;
