import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header/Header';

function App() {
  return (
    <div className="min-h-screen bg-surface-muted">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
