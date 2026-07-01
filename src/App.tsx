import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';

import './styles/theme.css';
import './styles/global.css';
// import { NotFound } from './pages/NotFound';
// import { AboutPomodoro } from './pages/AboutPomodoro';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Home />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
