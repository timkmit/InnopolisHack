import React from 'react';
import { useState } from 'react';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import RegistrationPage from './pages/Registration'; // Импортируйте ваш компонент
import IndexPanel from './pages/IndexPanel';
import CustomTabbar from './components/Tappbar';

function App() {
	const [simple, setSimple] = useState('one');
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <IndexPanel/>
		  <CustomTabbar simple={simple} setSimple={setSimple} />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
