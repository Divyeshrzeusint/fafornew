// import React, {useState, useEffect, useRef} from 'react';
// import {View, StyleSheet, Text, Image} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import {Drawer} from 'react-native-paper';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {useIsFocused} from '@react-navigation/native';
// import images from '../themes/images';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   moderateHeight,
//   moderateScale,
//   moderateWidth,
// } from '../utils/responsive';
// import colors from '../themes/colors';
// import {useDrawerStatus} from '@react-navigation/drawer';
// import AppText from '../components/AppText';
// import {Montserrat} from '../themes/fonts';
// import screens from '../constants/screens';
// import {logout} from '../redux/slices/logout';
// import strings from '../constants/strings';

// export function DrawerContent(props) {
//   const drawerStatus = useDrawerStatus();
//   const [balReqSubmenuVisible, setBalReqSubmenuVisible] = useState(false);
//   const [isSubmenuVisible, setisSubmenuVisible] = useState(false);

//   const dispatch = useDispatch();
//   const {data} = useSelector(state => state.userDetails);

//   return (
//     <View
//       style={[
//         styles.mainContainer,
//         drawerStatus == 'open' && {width: moderateWidth(80)},
//         drawerStatus != 'open' && {backgroundColor: colors.nevyBlue},
//       ]}>
//       <DrawerContentScrollView style={styles.container} {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userProfileView}>
//             <Image source={images.userPlaceholder} style={styles.userImg} />
//             <AppText
//               label={data?.name}
//               size={'large'}
//               fontFamily={Montserrat.Bold}
//               color={colors.white}
//               textStyles={styles.name}
//             />
//             <AppText
//               label={data?.self_id}
//               size={'regular'}
//               fontFamily={Montserrat.Regular}
//               color={colors.greenAccent}
//             />
//           </View>

//           <Drawer.Section style={styles.drawerSection}>
//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="dashboard"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="Dashboard"
//               onPress={() => {
//                 props.navigation.navigate(screens.dashboard);
//               }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label={strings.screenTitles.business}
//               // onPress={() => {
//               //   props.navigation.navigate(screens.dashboard);
//               // }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label={strings.screenTitles.register}
//               // onPress={() => {
//               //   props.navigation.navigate(screens.dashboard);
//               // }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label={strings.screenTitles.upgrade}
//               // onPress={() => {
//               //   props.navigation.navigate(screens.dashboard);
//               // }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label={strings.screenTitles.repurchase}
//               // onPress={() => {
//               //   props.navigation.navigate(screens.dashboard);
//               // }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="Balance Request"
//               onPress={() => setBalReqSubmenuVisible(prev => !prev)}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />
//             {balReqSubmenuVisible && (
//               <View>
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label="Balance Request"
//                   onPress={() => {
//                     props.navigation.navigate('BalancerequestScreen');
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 16}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label="Balance Request Report"
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.balanceRequestReport,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 16}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label="Product Voucher Request"
//                   onPress={() => {
//                     props.navigation.navigate(screens.productVoucherRequest);
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 16}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label="Product Voucher Report"
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.productVoucherReport,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 16}}
//                 />
//               </View>
//             )}

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="Income"
//               onPress={() => setisSubmenuVisible(prev => !prev)}
//               //onPress={() => {props.navigation.navigate('BalancerequestScreen')}}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />
//             {isSubmenuVisible && (
//               <View>
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.pairingBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.pairBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.sponserBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.sponserBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.upgradeBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.upgradeBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.uniLevelBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.unilevelBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.indirectBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.indirectBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.selfUniLevelBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.selfUniLevelBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.leadershipBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.leadershipBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//                 <DrawerItem
//                   style={styles.drawerItemsSub}
//                   icon={({color, size}) => (
//                     <Icon
//                       name="chevron-right"
//                       color="#00cbaa"
//                       size={25}
//                       style={styles.iconStyle}
//                     />
//                   )}
//                   label={strings.leadershipPoolBonus}
//                   onPress={() => {
//                     props.navigation.navigate(screens.report, {
//                       type: strings.screenTitles.leadershipPoolBonusHistory,
//                     });
//                   }}
//                   labelStyle={{color: '#ffffff', fontSize: 18}}
//                 />
//               </View>
//             )}
//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="money"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label={strings.myTeam}
//               onPress={() => {
//                 props.navigation.navigate('DirectteamScreen');
//               }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />
//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="wallet"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="Wallet Conversion"
//               onPress={() => {
//                 props.navigation.navigate(screens.walletConversation);
//               }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="wallet"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="Cashout History"
//               onPress={() => {
//                 props.navigation.navigate(screens.report, {
//                   type: strings.screenTitles.cashWalletHistory,
//                 });
//               }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={styles.drawerItems}
//               icon={({color, size}) => (
//                 <Icon
//                   name="wallet"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="Spending History"
//               onPress={() => {
//                 props.navigation.navigate(screens.report, {
//                   type: strings.screenTitles.spendingWalletHistory,
//                 });
//               }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />

//             <DrawerItem
//               style={[styles.drawerItems, {marginBottom: 10}]}
//               icon={({color, size}) => (
//                 <Icon
//                   name="wallet"
//                   color="#00cbaa"
//                   size={25}
//                   style={styles.iconStyle}
//                 />
//               )}
//               label="My Orders"
//               onPress={() => {
//                 props.navigation.navigate(screens.myOrders);
//               }}
//               labelStyle={{color: '#ffffff', fontSize: 18}}
//             />
//           </Drawer.Section>
//           <DrawerItem
//             style={[styles.drawerItems, {marginBottom: 10}]}
//             icon={({color, size}) => (
//               <Icon
//                 name="logout"
//                 color="#00cbaa"
//                 size={25}
//                 style={styles.iconStyle}
//               />
//             )}
//             label="Logout"
//             onPress={() => {
//               dispatch(logout());
//             }}
//             labelStyle={{color: '#00cbaa', fontSize: 18}}
//           />
//         </View>
//       </DrawerContentScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//   },
//   container: {
//     backgroundColor: colors.nevyBlue,
//     borderTopRightRadius: moderateScale(50),
//     borderBottomRightRadius: moderateScale(50),
//   },

//   userProfileView: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 25,
//   },
//   name: {marginTop: moderateHeight(2), marginBottom: moderateHeight(0.3)},
//   userImg: {
//     width: moderateScale(95),
//     height: moderateScale(95),
//     borderRadius: moderateScale(70),
//     borderColor: colors.greenAccent,
//     borderWidth: moderateScale(2),
//   },
//   userName: {
//     color: '#userName',
//     fontSize: 24,
//     color: '#fff',
//     marginTop: 15,
//     fontWeight: 'bold',
//   },
//   userId: {
//     color: '#00cbaa',
//     fontSize: 18,
//   },
//   drawerItems: {
//     marginBottom: -10,
//   },
//   drawerItemsSub: {
//     marginLeft: 20,
//     marginBottom: -10,
//   },
//   iconStyle: {
//     marginRight: -20,
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#f4f4f4',
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  Pressable,
  ScrollView,
} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useDrawerStatus} from '@react-navigation/drawer';

import images from '../themes/images';
import colors from '../themes/colors';
import {
  moderateHeight,
  moderateScale,
  moderateWidth,
  scale,
  verticalScale,
} from '../utils/responsive';
import AppText from '../components/AppText';
import {Montserrat} from '../themes/fonts';
import screens from '../constants/screens';
import {logout} from '../redux/slices/logout';
import strings from '../constants/strings';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props) {
  const drawerStatus = useDrawerStatus();
  const [visibleSubmenus, setVisibleSubmenus] = useState({});
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.userDetails);

  const toggleSubmenu = key => {
    setVisibleSubmenus(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const menuItems = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      screen: screens.dashboard,
    },
    {
      label: 'Business',
      icon: 'business',
      submenu: [
        {label: 'Registration', screen: screens.sponserDetail},
        {label: 'Repurchase', screen: screens.welcomeRepurchase},
        {label: 'Upgrade', screen: screens.businessUpgrade},
      ],
    },
    {
      label: 'Balance Request',
      icon: 'money',
      submenu: [
        {label: 'Balance Request', screen: 'BalancerequestScreen'},
        {
          label: 'Balance Request Report',
          screen: screens.report,
          params: {
            type: strings.screenTitles.balanceRequestReport,
          },
        },
        {
          label: 'Product Voucher Request',
          screen: screens.productVoucherRequest,
        },
        {
          label: 'Product Voucher Report',
          screen: screens.report,
          params: {
            type: strings.screenTitles.productVoucherReport,
          },
        },
      ],
    },
    {
      label: 'Income',
      icon: 'money',
      submenu: [
        {
          label: strings.pairingBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.pairBonusHistory,
          },
        },
        {
          label: strings.sponserBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.sponserBonusHistory,
          },
        },
        {
          label: strings.upgradeBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.upgradeBonusHistory,
          },
        },
        {
          label: strings.uniLevelBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.unilevelBonusHistory,
          },
        },
        {
          label: strings.indirectBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.indirectBonusHistory,
          },
        },
        {
          label: strings.selfUniLevelBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.selfUniLevelBonusHistory,
          },
        },
        {
          label: strings.leadershipBonus,
          screen: screens.report,
          params: {
            type: strings.screenTitles.leadershipBonusHistory,
          },
        },
      ],
    },
    {label: strings.myTeam, icon: 'money', screen: 'DirectteamScreen'},
    {
      label: 'Wallet Conversion',
      icon: 'wallet',
      screen: screens.walletConversation,
    },
    {
      label: 'Cashout History',
      icon: 'wallet',
      screen: screens.spendingWalletHistory,
    },
    {
      label: 'Spending History',
      icon: 'wallet',
      screen: screens.spendingWalletHistory,
    },
    {label: 'My Orders', icon: 'wallet', screen: screens.myOrders},
  ];

  const array = 'data?.name data?.name data?.name';

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.mainContainer,
        drawerStatus === 'open' && {width: moderateWidth(85)},
        drawerStatus !== 'open' && {backgroundColor: colors.nevyBlue},
      ]}>
      <StatusBar hidden={true} />
      <DrawerContentScrollView style={styles.container} {...props}>
        <View style={styles.drawerContent}>
          <ImageBackground
            source={require('../assets/images/cashoutBg.png')}
            style={{height: verticalScale(165)}}
            imageStyle={{
              borderTopRightRadius: scale(45),
              marginTop: verticalScale(-5),
            }}>
            <Pressable onPress={() => props.navigation.closeDrawer()}>
              <AntDesign
                name="close"
                size={scale(20)}
                color={colors.white}
                style={{
                  position: 'absolute',
                  left: scale(20),
                  top: verticalScale(15),
                }}
              />
            </Pressable>
            <View style={styles.userProfileView}>
              <Image source={images.userPlaceholder} style={styles.userImg} />
              <AppText
                label={data?.name}
                size={'large'}
                fontFamily={Montserrat.Bold}
                color={colors.white}
                textStyles={styles.name}
              />
              <AppText
                label={data?.self_id}
                size={'regular'}
                fontFamily={Montserrat.Bold}
                color={colors.greenAccent}
              />
            </View>
          </ImageBackground>

          <Drawer.Section
            style={{
              marginTop:
                data?.name > 22 ? verticalScale(30) : verticalScale(15),
            }}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <DrawerItem
                  style={styles.drawerItems}
                  icon={({color, size}) => (
                    <Icon
                      name={item.icon}
                      color="#00cbaa"
                      size={25}
                      style={styles.iconStyle}
                    />
                  )}
                  label={item.label}
                  onPress={() => {
                    item.submenu
                      ? toggleSubmenu(index)
                      : props.navigation.navigate(item.screen);
                  }}
                  labelStyle={styles.drawerItemLabel}
                />
                {item.submenu && visibleSubmenus[index] && (
                  <View style={styles.submenuContainer}>
                    {item.submenu.map((subItem, subIndex) => (
                      <DrawerItem
                        key={subIndex}
                        style={styles.drawerItemsSub}
                        icon={({color, size}) => (
                          <Icon
                            name="chevron-right"
                            color="#00cbaa"
                            size={25}
                            style={styles.iconStyle}
                          />
                        )}
                        label={subItem.label}
                        onPress={() =>
                          props.navigation.navigate(
                            subItem.screen,
                            subItem.params,
                          )
                        }
                        labelStyle={styles.submenuLabel}
                      />
                    ))}
                  </View>
                )}
              </React.Fragment>
            ))}

            <DrawerItem
              style={[styles.drawerItems, styles.logoutView]}
              label="Logout"
              onPress={() => {
                dispatch(logout());
              }}
              labelStyle={styles.logoutLable}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.nevyBlue,
    borderTopRightRadius: moderateScale(50),
    borderBottomRightRadius: moderateScale(50),
  },
  userProfileView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(50),
    backgroundColor: colors.white,
    width: scale(260),
    paddingVertical: verticalScale(10),
    marginLeft: scale(1.5),
    alignSelf: 'center',
    borderRadius: scale(20),
    marginBottom: verticalScale(-15),
  },
  name: {
    marginBottom: moderateHeight(0.3),
    color: colors.greenAccent,
    marginTop: verticalScale(50),
    marginBottom: verticalScale(2),
    textAlign: 'center',
  },
  userImg: {
    width: moderateScale(95),
    height: moderateScale(95),
    borderRadius: moderateScale(70),
    borderColor: colors.greenAccent,
    borderWidth: moderateScale(2),
    position: 'absolute',
    top: verticalScale(-35),
  },
  drawerItems: {
    marginBottom: -10,
  },
  drawerItemsSub: {
    marginLeft: 20,
    marginBottom: -10,
  },
  iconStyle: {
    marginRight: -20,
  },
  drawerSection: {
    marginTop: verticalScale(18),
    // borderBottomWidth:scale(1),
    // borderColor:colors.red
  },
  drawerItemLabel: {
    color: colors.white,
    fontSize: 18,
  },
  submenuLabel: {
    color: colors.white,
    fontSize: scale(14),
  },
  submenuContainer: {
    paddingLeft: moderateScale(10),
  },
  logoutView: {
    marginBottom: verticalScale(10),
    backgroundColor: '#ff3066',
    height: scale(64),
    width: scale(64),
    borderRadius: scale(32),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(20),
    elevation: scale(10),
    shadowColor: '#ff3066',
    marginBottom: verticalScale(70),
  },
  logoutLable: {
    color: colors.white,
    fontSize: scale(13),
    width: scale(50),
    textAlign: 'center',
  },
});
