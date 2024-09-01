import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from '../constants/screens';
import DashboardScreen from '../screens/drawer/DashboardScreen';
import ProfileScreen from '../screens/drawer/ProfileScreen';
import LeadershipScreen from '../screens/drawer/LeadershipScreen';
import Support from '../screens/drawer/Support';
import TabBar from './TabBar';
import {createStackNavigator} from '@react-navigation/stack';
import CashoutrequestScreen from '../screens/drawer/CashoutrequestScreen';
import BalancerequestScreen from '../screens/drawer/BalancerequestScreen';
import ProductVoucherReq from '../screens/drawer/ProductVoucherReq';
import CashwallethistoryScreen from '../screens/drawer/CashwallethistoryScreen';
import SpendingwallethistoryScreen from '../screens/drawer/SpendingwallethistoryScreen';
import ProductvoucherhistoryScreen from '../screens/drawer/ProductvoucherhistoryScreen';
import PairbonusScreen from '../screens/drawer/PairbonusScreen';
import UnilevelbonusScreen from '../screens/drawer/UnilevelbonusScreen';
import IndirectbonusScreen from '../screens/drawer/IndirectbonusScreen';
import StockistbonusScreen from '../screens/drawer/StockistbonusScreen';
import DirectteamScreen from '../screens/drawer/DirectteamScreen';
import BalancetransferScreen from '../screens/drawer/BalancetransferScreen';
import WalletConversion from '../screens/drawer/WalletConversion';
import Report from '../screens/drawer/Report';
import MyOrders from '../screens/drawer/MyOrders';
import SponserDetail from '../screens/drawer/Bussiness/Registration/SponserDetail';
import RegistrationScreen from '../screens/drawer/Bussiness/Registration/RegistrationScreen';
import RegistrationPaymentSuccess from '../screens/drawer/Bussiness/Registration/RegistrationPaymentSuccess';
import WelcomeRepurchase from '../screens/drawer/Bussiness/Repurchase/WelcomeRepurchase';
import RegionSelection from '../screens/drawer/Bussiness/Repurchase/RegionSelection';
import RepurchaseCategorySelection from '../screens/drawer/Bussiness/Repurchase/RepurchaseCategorySelection';
import RepurchaseProductSelection from '../screens/drawer/Bussiness/Repurchase/RepurchaseProductSelection';
import RepurchasePurchaseBill from '../screens/drawer/Bussiness/Repurchase/RepurchasePurchaseBill';
import RepurchasePaymentSuccess from '../screens/drawer/Bussiness/Repurchase/RepurchasePaymentSuccess';
import UpgradeSelection from '../screens/drawer/Bussiness/Upgrade/UpgradeSelection';
import UpgradePaymentSuccess from '../screens/drawer/Bussiness/Upgrade/UpgradePaymentSuccess';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={screens.dashboard} component={DashboardScreen} />
      <Tab.Screen
        name={screens.cashoutRequest}
        component={CashoutrequestScreen}
      />
      <Tab.Screen
        name={screens.balanceRequest}
        component={BalancerequestScreen}
      />
      <Tab.Screen
        name={screens.productVoucherRequest}
        component={ProductVoucherReq}
      />
      <Tab.Screen
        name={screens.cashWalletHistory}
        component={CashwallethistoryScreen}
      />
      <Tab.Screen
        name={screens.spendingWalletHistory}
        component={SpendingwallethistoryScreen}
      />
      <Tab.Screen
        name={screens.productVoucherHistory}
        component={ProductvoucherhistoryScreen}
      />
      <Tab.Screen name={screens.pairBonus} component={PairbonusScreen} />
      <Tab.Screen
        name={screens.unilevelBonus}
        component={UnilevelbonusScreen}
      />
      <Tab.Screen
        name={screens.indirectBonus}
        component={IndirectbonusScreen}
      />
      <Tab.Screen
        name={screens.stockistBonus}
        component={StockistbonusScreen}
      />
      <Tab.Screen name={screens.directTeam} component={DirectteamScreen} />
      <Tab.Screen
        name={screens.balanceTransfer}
        component={BalancetransferScreen}
      />
      <Tab.Screen
        name={screens.walletConversation}
        component={WalletConversion}
      />
      <Tab.Screen name={screens.report} component={Report} />
      <Tab.Screen name={screens.myOrders} component={MyOrders} />
      <Tab.Screen name={screens.sponserDetail} component={SponserDetail} />
      <Tab.Screen
        name={screens.businessRegistration}
        component={RegistrationScreen}
      />
      <Tab.Screen
        name={screens.registrationPaymentSuccess}
        component={RegistrationPaymentSuccess}
      />
      <Tab.Screen
        name={screens.welcomeRepurchase}
        component={WelcomeRepurchase}
      />
      <Tab.Screen name={screens.regionSelection} component={RegionSelection} />
      <Tab.Screen
        name={screens.repurchaseCategorySelection}
        component={RepurchaseCategorySelection}
      />
      <Tab.Screen
        name={screens.repurchaseProductSelection}
        component={RepurchaseProductSelection}
      />
      <Tab.Screen
        name={screens.repurchasePurchaseBill}
        component={RepurchasePurchaseBill}
      />
      <Tab.Screen
        name={screens.repurchasePaymentSuccess}
        component={RepurchasePaymentSuccess}
      />
      <Tab.Screen name={screens.businessUpgrade} component={UpgradeSelection} />
      <Tab.Screen
        name={screens.upgradePaymentSuccess}
        component={UpgradePaymentSuccess}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={screens.home} component={HomeStack} />
      <Tab.Screen name={screens.userProfile} component={ProfileScreen} />
      <Tab.Screen
        name={screens.leadershipAndRanking}
        component={LeadershipScreen}
      />
      <Tab.Screen name={screens.support} component={Support} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
