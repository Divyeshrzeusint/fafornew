import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppText from '../../components/AppText';
import Header from '../../components/Header';
import HorizontalLine from '../../components/HorizontalLine';
import {Loader} from '../../components/Loader';
import Row from '../../components/Row';
import apiRoutes from '../../constants/apiRoutes';
import strings from '../../constants/strings';
import {getReport, getReportClear} from '../../redux/slices/getReport';
import {
  getUserDetails,
  getUserDetailsClear,
} from '../../redux/slices/getUserDetails';
import colors from '../../themes/colors';
import {Montserrat} from '../../themes/fonts';
import globalStyles from '../../themes/globalStyles';
import images from '../../themes/images';
import {
  moderateHeight,
  moderateScale,
  moderateWidth,
} from '../../utils/responsive';

const {screenTitles} = strings;
let reportTypes = {};
reportTypes[screenTitles.balanceRequestReport] =
  apiRoutes.getBalanceRequestReport;
reportTypes[screenTitles.productVoucherReport] =
  apiRoutes.getProductVoucherHistory;
reportTypes[screenTitles.pairBonusHistory] = apiRoutes.getPairBonus;
reportTypes[screenTitles.sponserBonusHistory] = apiRoutes.getCashWalletHistory;
reportTypes[screenTitles.upgradeBonusHistory] = apiRoutes.getUpgradeBonus;
reportTypes[screenTitles.unilevelBonusHistory] =
  apiRoutes.getUnilevelBonusHistory;
reportTypes[screenTitles.indirectBonusHistory] =
  apiRoutes.getIndirectBonusHistory;
reportTypes[screenTitles.selfUniLevelBonusHistory] =
  apiRoutes.getSelfUnilevelBonus;
reportTypes[screenTitles.leadershipBonusHistory] = apiRoutes.getLeadershipBonus;
reportTypes[screenTitles.leadershipPoolBonusHistory] =
  apiRoutes.getLeadershipBonus; // API needed
reportTypes[screenTitles.cashWalletHistory] = apiRoutes.getCashoutHistory;
reportTypes[screenTitles.spendingWalletHistory] =
  apiRoutes.getSpendingWallethistory;

const Report = ({route}) => {
  const {params} = route;

  const [userData, setUserData] = useState({});
  const [reportData, setReportData] = useState([]);

  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);
  const getReportResponse = useSelector(state => state.getReport);

  const dateTitle =
    params?.type == screenTitles.balanceRequestReport ||
    params?.type == screenTitles.productVoucherReport
      ? strings.requestDate
      : strings.date;

  const cashWalletTitle =
    params.type == screenTitles.unilevelBonusHistory
      ? strings.income
      : strings.cashWallet;

  const amountTitle =
    params?.type == screenTitles.leadershipBonusHistory ||
    params?.type == screenTitles.leadershipPoolBonusHistory
      ? strings.income
      : strings.amount;

  useEffect(() => {
    if (global.userData?.self_id && !userData?.spending_wallet) {
      const data = {self_id: global.userData?.self_id};
      dispatch(getUserDetails(data));
    }
  }, [userData]);

  useEffect(() => {
    if (global.userData?.self_id) {
      const reportType = reportTypes[params?.type];
      const data =
        params?.type == screenTitles?.selfUniLevelBonusHistory ||
        params?.type == screenTitles.leadershipBonusHistory ||
        params?.type == screenTitles.leadershipPoolBonusHistory
          ? {user_id: global?.userData?.id}
          : {selfid: global?.userData?.self_id};
      const payload = {data, reportType};
      dispatch(getReport(payload));
    }
  }, [params?.type]);

  useEffect(() => {
    if (getReportResponse?.data) {
      setReportData(getReportResponse?.data);
      dispatch(getReportClear());
    }
    if (getReportResponse?.error) {
      Alert.alert(strings.faforlife, getReportResponse?.error);
      dispatch(getReportClear());
    }
  }, [getReportResponse]);

  useEffect(() => {
    if (userDetails?.data) {
      setUserData(userDetails?.data);
    }
    if (userDetails?.error) {
      Alert.alert(strings.faforlife, userDetails?.error);
      dispatch(getUserDetailsClear());
    }
  }, [userDetails]);

  const renderItem = ({item}) => {
    return (
      <View>
        {item?.ad_date && (
          <Row
            title={dateTitle}
            value={item?.ad_date}
            valueStyle={styles.valueStyle}
          />
        )}
        {(item?.income || item?.wallet) && (
          <Row
            title={strings.income}
            value={item?.income || item?.wallet}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.refer_id && (
          <Row
            title={strings.refferID}
            value={item?.refer_id}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.level && (
          <Row
            title={strings.level}
            value={item?.level}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.amount && (
          <Row
            title={amountTitle}
            value={item?.amount}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.remark && (
          <Row
            title={strings.remarks}
            value={item?.remark}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.reqtype && (
          <Row
            title={strings.requestType}
            value={item?.reqtype}
            valueStyle={styles.valueStyle}
          />
        )}
        {(item?.pay_status || item?.paid_status) && (
          <Row
            title={strings.status}
            value={item?.pay_status || item?.paid_status}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.cash_wallet && (
          <Row
            title={cashWalletTitle}
            value={item?.cash_wallet}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.child_id && (
          <Row
            title={strings.userId}
            value={item?.child_id}
            valueStyle={styles.valueStyle}
          />
        )}
        {(item?.lead_type || item?.pay_type) && (
          <Row
            title={strings.type}
            value={item?.lead_type || item?.pay_type}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.fromdate && (
          <Row
            title={strings.fromDate}
            value={item?.fromdate}
            valueStyle={styles.valueStyle}
          />
        )}
        {item?.todate && (
          <Row
            title={strings.toDate}
            value={item?.todate}
            valueStyle={styles.valueStyle}
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Header title={params?.type} hideAction />
        <View style={styles.container}>
          <ImageBackground
            source={images.balanceBg}
            resizeMode="contain"
            style={styles.balanceContainer}>
            {userData?.spending_wallet && (
              <AppText
                label={`N ${userData?.spending_wallet}`}
                size={'enormous'}
                fontFamily={Montserrat.Bold}
                color={colors.white}
              />
            )}
            <AppText
              label={params?.type}
              size={'regular'}
              fontFamily={Montserrat.Regular}
              color={colors.white}
            />
          </ImageBackground>
          <FlatList
            data={reportData}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
            contentContainerStyle={styles.innerContainer}
            keyExtractor={(_, i) => i.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <HorizontalLine />}
          />
        </View>
      </View>
      {(userDetails?.isLoading || getReportResponse?.isLoading) && <Loader />}
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: globalStyles.statusBarMargin,
    paddingHorizontal: moderateWidth(4),
  },
  balanceContainer: {
    width: '100%',
    height: moderateHeight(30),
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: moderateScale(65),
    marginTop: moderateScale(-7),
  },
  container: {
    marginTop: moderateScale(20),
    backgroundColor: colors.white,
    borderRadius: moderateScale(25),
    height: moderateHeight(80),
  },
  flatList: {marginTop: moderateScale(-20)},
  innerContainer: {
    paddingHorizontal: moderateWidth(5),
    paddingBottom: moderateScale(20),
  },
  valueStyle: {flex: 1},
});
