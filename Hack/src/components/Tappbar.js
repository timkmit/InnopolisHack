import React from 'react';
import {
  Tabbar,
  TabbarItem,
} from '@vkontakte/vkui';
import { Icon28NewsfeedOutline, Icon28UserCircleOutline } from '@vkontakte/icons';

function CustomTabbar({ simple, setSimple }) {
  return (
    <div
      style={{
        background: 'var(--vkui--color_background)',
        padding: '10px 0',
        position: 'fixed', 
        bottom: '0', 
        left: '0',
        right: '0',
      }}
    >
      <div style={{ maxWidth: 768, margin: 'auto' }}>
        <Tabbar style={{ position: 'static', margin: '0 0 10px' }}>
          <TabbarItem selected={simple === 'one'} onClick={() => setSimple('one')} aria-label="Новости">
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem selected={simple === 'two'} onClick={() => setSimple('two')} aria-label="Профиль">
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      </div>
    </div>
  );
}

export default CustomTabbar;
