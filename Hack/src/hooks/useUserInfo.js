import { useEffect, useState } from 'react';
import connect from '@vkontakte/vkui-connect';

function useVkUserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const handleUserInfo = (e) => {
      if (e.detail.type === 'VKWebAppGetUserInfoResult') {
        const userData = e.detail.data;
        setUserInfo(userData);
        setLoading(false);
      } else if (e.detail.type === 'VKWebAppGetUserInfoFailed') {
        setError('Failed to get user info');
        setLoading(false);
      }
    };

    
    connect.subscribe(handleUserInfo);


    connect.send('VKWebAppGetUserInfo', {});


    return () => {
      connect.unsubscribe(handleUserInfo);
    };
  }, []);

  return { userInfo, loading, error };
}

export default useVkUserInfo;
