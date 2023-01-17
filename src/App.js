import './App.css';
import {GetChar, RMcomponent} from "./components/RickAndMortyBlock/RMcomponent";

function App() {

    GetChar();

    return (
        <div className="App">

            <RMcomponent/>

        </div>
    );
}

export default App;
