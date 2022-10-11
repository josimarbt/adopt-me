import { render } from 'react-dom'; //it is the same as say: import ReactDOM from 'react-dom';
//if you use the alternative one, do you have to write the ReactDOM.render below.
import SearchParams from './SearchParams';

const App = () => {
    return (
    <div>
        <h1>Adopt Me!</h1>
        <SearchParams /> 
    </div>
    );
};

render(<App />, document.getElementById("root"))