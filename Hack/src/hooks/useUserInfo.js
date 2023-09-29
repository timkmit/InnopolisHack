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

        // Запрашиваем адрес электронной почты пользователя после получения данных о пользователе
        connect.send('VKWebAppGetEmail', {});
      } else if (e.detail.type === 'VKWebAppGetUserInfoFailed') {
        setError('Failed to get user info');
        setLoading(false);
      } else if (e.detail.type === 'VKWebAppGetEmailResult') {
        const email = e.detail.data.email;
        // Обновляем userInfo, добавив в него адрес электронной почты
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          email: email,
        }));
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
