import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DashboardCuidador from '../screens/DashboardCuidador';
import DashboardFamilia from '../screens/DashboardFamilia';
import CadastroUsuario from '../screens/CadastroUsuario';
import ControleMedicacao from '../screens/ControleMedicacao';
import CronogramaAtividades from '../screens/CronogramaAtividades';
import DatasComemorativas from '../screens/DatasComemorativas';
import GestaoUsuarios from '../screens/GestaoUsuarios';
import HistoricoMedico from '../screens/HistoricoMedico';
import RelatorioDiarioFamilia from '../screens/RelatorioDiarioFamilia';
import StatusGeral from '../screens/StatusGeral';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="DashboardCuidador" component={DashboardCuidador} />
        <Drawer.Screen name="DashboardFamilia" component={DashboardFamilia} />
        <Drawer.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Drawer.Screen name="ControleMedicacao" component={ControleMedicacao} />
        <Drawer.Screen name="CronogramaAtividades" component={CronogramaAtividades} />
        <Drawer.Screen name="DatasComemorativas" component={DatasComemorativas} />
        <Drawer.Screen name="GestaoUsuarios" component={GestaoUsuarios} />
        <Drawer.Screen name="HistoricoMedico" component={HistoricoMedico} />
        <Drawer.Screen name="RelatorioDiarioFamilia" component={RelatorioDiarioFamilia} />
        <Drawer.Screen name="StatusGeral" component={StatusGeral} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
