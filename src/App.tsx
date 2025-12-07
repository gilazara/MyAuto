import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
