import { View, Panel, PanelHeader, FormLayout, Input, Button } from '@vkontakte/vkui';

import React from 'react';

function RegistrationPage() {
  return (
    <View activePanel="registrationPanel">
      <Panel id="registrationPanel">
        <PanelHeader>Регистрация</PanelHeader>
        <FormLayout>
          <Input type="text" top="Имя" />
          <Input type="text" top="Фамилия" />
          <Input type="email" top="Email" />
          <Input type="password" top="Пароль" />
          <Button size="xl">Зарегистрироваться</Button>
        </FormLayout>
      </Panel>
    </View>
  );
}

export default RegistrationPage;
