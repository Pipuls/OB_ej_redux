import './App.css';
import TodosContainer from './components/containers/todoContainer';
import TodoFormContainer from './components/containers/todoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer/>
        <TodoFormContainer/>
        {/* opciones de filtrado */}
        <FilterOptions/>
      </header>
    </div>
  );
}

export default App;
