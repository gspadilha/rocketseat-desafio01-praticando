import { Header } from './components/Header';
import { Body } from './components/Body';

import { TodoContextProvider } from './context/TodoContextProvider';

function App() {
  return (
    <TodoContextProvider>
      <Header />
      <Body />
    </TodoContextProvider>
  );
}

export default App;
