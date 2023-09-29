import React from 'react';
import { useState } from 'react';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import IndexPanel from './pages/IndexPanel';
import CustomTabbar from './components/Tappbar';
import useVkUserInfo from './hooks/useUserInfo';

function App() {
  const [simple, setSimple] = useState('one');
  const { userInfo, loading, error } = useVkUserInfo();
  console.log('userInfo:', userInfo);
  console.log('loading:', loading);
  console.log('error:', error);
  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <IndexPanel />
          <CustomTabbar simple={simple} setSimple={setSimple} />
          <div style={{ marginTop: '20px' }}>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <>
                {Object.keys(userInfo).map((key) => (
                  <p key={key}>
                    {key}: {userInfo[key]}
                  </p>
                ))}
              </>
            )}
          </div>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;
