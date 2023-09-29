import React, { useState } from 'react';
import {
  SplitLayout,
  SplitCol,
  Panel,
  PanelHeader,
  Button,
  IconButton,
  Group,
  CellButton,
  Header,
  Search,
  Cell
} from '@vkontakte/vkui';
import { Icon56StickerOutline } from '@vkontakte/icons';
import Accordion from '../components/Accordion';
import { usePlatform } from '@vkontakte/vkui';

function IndexPanel() {
    const platform = usePlatform();
    const menuButtonColor = platform === 'ios' ? 'grey' : 'white';

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const onChange = (e) => {
    setSearch(e.target.value); // Обновляем search при изменении значения
  };

  return (
    <SplitLayout style={{ justifyContent: 'space-between' }}>
      {isSidebarOpen && (
        <SplitCol
          fixed
          width="280px"
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
        >
          <Panel id="sidebar">
            <Group header={<Header mode="secondary">Пространства</Header>}>
              <div style={{ position: 'absolute', bottom: '15px', right: '5px' }}>
                {/* Прижимаем кнопку "Закрыть" к правому нижнему краю сайдбара с отступом 5 пикселей */}
                <Button onClick={toggleSidebar}>Закрыть</Button>
              </div>
              <Accordion  items={[
                { title: 'Мое пространство', content: 'Мой проект' },
                // Добавьте другие элементы аккордиона здесь
                ]} />

              <CellButton >Добавить пространство</CellButton>
              <CellButton mode="danger">Удалить пространство</CellButton>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol
        animate={!isSidebarOpen}
        spaced={isSidebarOpen}
        width={isSidebarOpen ? '100%' : '0'}
        style={{
          filter: isSidebarOpen ? 'blur(2px)' : 'none',
          transition: 'filter 0.3s',
        }}
      >
        <Panel id="main">
          <PanelHeader>
            <Button onClick={toggleSidebar} style={{ position: 'absolute', top: '12px', left: '5px', backgroundColor: menuButtonColor }}>Меню</Button>
            
            
          </PanelHeader>
          <Search value={search} onChange={onChange} after={null} style={{}}/>
          <div>Основа
          

          </div>
          
        </Panel>
        <Panel id="panel1">
            <div style={{fontWeight:'bold', fontSize:'20px', marginLeft:'10px'}}>
            Мое пространство
            </div>
            
        <Group>
          <Icon56StickerOutline style={{marginLeft:'30px'}}/>
        </Group>
      </Panel>
      </SplitCol>
    </SplitLayout>
  );
}

export default IndexPanel;