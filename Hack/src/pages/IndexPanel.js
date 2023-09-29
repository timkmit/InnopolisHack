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
} from '@vkontakte/vkui';
import Accordion from '../components/Accordion';


function IndexPanel() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
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
            <Button onClick={toggleSidebar} style={{ position: 'absolute', top: '12px', left: '5px' }}>Меню</Button>
          </PanelHeader>
          <div>Основа</div>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
}

export default IndexPanel;