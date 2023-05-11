import { Header } from './components/Header';
import { Body } from './components/Body';

import { TodoProvider } from './hooks/useTodo';

function App() {
  return (
    <>
      <Header />
      <TodoProvider>
        <Body />
      </TodoProvider>
    </>
  );
}

export default App;
