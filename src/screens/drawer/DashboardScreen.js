import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch, useSelector} from 'react-redux';
import DashboardCard from '../../components/DashboardCard';
import DashboardChip from '../../components/DashboardChip';
import DashboardProfile from '../../components/DashboardProfile';
import {Loader} from '../../components/Loader';
import VerticleLine from '../../components/VerticleLine';
import strings from '../../constants/strings';
import {
  getUserDetails,
  getUserDetailsClear,
} from '../../redux/slices/getUserDetails';
import colors from '../../themes/colors';
import {
  moderateHeight,
  moderateScale,
  moderateWidth,
  scale,
  verticalScale,
} from '../../utils/responsive';

const DashboardScreen = ({navigation}) => {
  const [userData, setUserData] = useState({});

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);

  useEffect(() => {
    if (global.userData?.self_id) {
      const data = {self_id: global.userData?.self_id};
      dispatch(getUserDetails(data));
    }
  }, []);

  useEffect(() => {
    if (userDetails?.data) {
      setUserData(userDetails?.data);
    }
    if (userDetails?.error) {
      Alert.alert(strings.faforlife, userDetails?.error);
      dispatch(getUserDetailsClear());
    }
  }, [userDetails]);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation?.toggleDrawer()}>
        <SimpleIcon name={'menu'} size={25} color={colors.white} />
      </TouchableOpacity>
      <View style={styles.headercontainer}></View>
      <View style={styles.dashboardProfileContainer}>
        <DashboardProfile data={userData} />
      </View>
      {!userDetails?.isLoading ? (
        <SafeAreaView style={styles.innerWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.innerContainer}
            // contentContainerStyle={styles.contentContainerStyle}
          >
            <View style={styles.mainSection}>
              <View style={styles.row}>
                <DashboardCard
                  title={strings.rankingLeftPV}
                  value={userData?.left_pv}
                />
                <VerticleLine />
                <DashboardCard
                  title={strings.rankingRightPV}
                  value={userData?.right_pv}
                />
              </View>
              <View style={styles.row}>
                <DashboardCard
                  title={strings.pairingLeftPV}
                  value={userData?.left_pv}
                  bgColor={colors.pink}
                />
                <VerticleLine />
                <DashboardCard
                  title={strings.pairingRightPV}
                  value={userData?.right_pv}
                  bgColor={colors.pink}
                />
              </View>
              <View style={styles.row}>
                <DashboardChip
                  title={strings.totalUpgradePV}
                  value={userData?.upgrade_pv}
                />
                <DashboardChip
                  title={strings.totalUpgradePV}
                  value={userData?.upgrade_pv}
                />
                <DashboardChip
                  title={strings.packageAmount}
                  value={userData?.package_amount}
                />
              </View>
              <View style={styles.row}>
                <DashboardChip
                  title={strings.cashWalletPoint}
                  value={userData?.cash_wallet}
                />
                <DashboardChip
                  title={strings.pairBonusPoint}
                  value={userData?.pair_bouns}
                />
                <DashboardChip
                  title={strings.productVoucherWallet}
                  value={userData?.product_wallet}
                />
              </View>
              <View style={styles.row}>
                <DashboardChip
                  title={strings.placementBonusPoint}
                  value={userData?.placement_bouns}
                />
                <DashboardChip
                  textColor={colors.white}
                  bgColor={colors.greenHue}
                  title={strings.unilevelWallet}
                  value={userData?.unilevel_bouns}
                />
                <DashboardChip
                  title={strings.stockistRetailBonus}
                  value={userData?.stockist_retail_wallet}
                />
              </View>
              <View style={styles.row}>
                <DashboardChip
                  title={strings.totalIndirectBonus}
                  value={userData?.indirect_bouns}
                />
                <DashboardChip
                  title={strings.leadershipPoolBonus}
                  value={userData?.leadership_pool_bouns}
                />
                <DashboardChip
                  title={strings.totalEarnings}
                  value={userData?.total_earning}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  headercontainer: {
    backgroundColor: 'red',
    height: verticalScale(240),
    borderBottomLeftRadius: scale(50),
    borderBottomRightRadius: scale(50),
  },
  menuContainer: {
    position: 'absolute',
    top: verticalScale(30),
    left: scale(20),
    zIndex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {marginTop: moderateScale(17)},
  contentContainerStyle: {
    paddingBottom: moderateScale(150),
  },
  mainSection: {
    marginTop: moderateHeight(2),
    paddingHorizontal: moderateWidth(5),
  },
  dashboardProfileContainer: {
    position: 'absolute', 
    top: scale(100)
  },
  innerWrapper: {
    flex: 1, 
    marginTop: scale(80)
  }
});

export default DashboardScreen;