import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../themes/colors';
import {scale, verticalScale} from '../../utils/responsive';
import {Montserrat} from '../../themes/fonts';
import CustomDropDown from '../CustomDropDown';
import {CheckBox, Icon} from '@rneui/themed';
import CustomeButton from '../../Custome/CustomeButton';
import CustomeButtonView from '../../Custome/CustomeButtonView';
import CustomeInputField from '../../Custome/CustomeInputField';
import axiosInstanceForBussiness from '../../utils/axiosInstanceForBussiness';
import apiRoutes from '../../constants/apiRoutes';
import showMessageonTheScreen from '../showMessageonTheScreen';
import {Loader} from '../Loader';
import { useNavigation } from '@react-navigation/native';
import screens from '../../constants/screens';

const walletData = [{title: 'wallet'}];

const TransactionIDData = [
  {title: 'TransactionID1'},
  {title: 'TransactionID2'},
  {title: 'TransactionID3'},
  {title: 'TransactionID4'},
];

const WalletDeduct = ({previousStep, nextStep, currentPosition, labels}) => {
  const navigation = useNavigation()
  const [selectedWallet, setSelectedWallet] = useState('');
  const [wallet, setWallet] = useState('');
  const [transaction, setTransaction] = useState('');
  const [visible, setVisible] = useState(false);

  // ==================================== Api ===================================== //

  const checkTransaction = async () => {
    try {
      setVisible(true);
      const response = await axiosInstanceForBussiness.post(
        `${apiRoutes.businessRegistration}/${apiRoutes.checkTransactionPass}`,
        {self_id: global?.userData.self_id, txn_pass: transaction},
      );
      console.log('response?.data', response?.data);
      showMessageonTheScreen(response?.data?.msg);
    } catch (error) {
      console.error('Error making POST request:', error);
    } finally {
      setVisible(false);
    }
  };

  const registerUser = async () => {
    // console.log('package_id:', global?.selectedPackage);
    // console.log('sponser_id:', global.sponsorId);
    // console.log('placement_id:', global.placementId);
    // console.log('position:', global.position);
    // console.log('country:', global.countryId);
    // console.log('region_id:', global.regionId);
    // console.log('self_col:', global.agency);
    // console.log('username:', global.userName);
    // console.log('name:', global.name);
    // console.log('gender:', global.gender);
    // console.log('dob:', global.dateOfBirth);
    // console.log('pass:', global.password);
    // console.log('cpass:', global.confirmPassword);
    // console.log('email:', global.email);
    // console.log('mob:', global.mobileNo);
    // console.log('address_1:', global.addressLine1);
    // console.log('address_2:', global.addressLine2);
    // console.log('state:', global.state);
    // console.log('city:', global.city);
    // console.log('saddress_1:', global.shippingAddressLine1);
    // console.log('saddress_2:', global.shippingAddressLine2);
    // console.log('sstate:', global.shippingState);
    // console.log('scity:', global.shippingCity);
    // console.log('acname:', global.accountName);
    // console.log('bname:', global.bankName);
    // console.log('branch:', global.branchName);
    // console.log('account_no:', global.accountNumber);
    // console.log('ifsc:', global.ifscCode);
    // console.log('bitcoin_wallet_code:', global.bitcoinWalletCode);
    // console.log('paypal_email:', global.paypalEmail);
    // console.log('txn_pass:', transaction);
    // console.log('cart_items:', global.cartData);
    try {
      setVisible(true);
      const response = await axiosInstanceForBussiness.post(
        `${apiRoutes.businessRegistration}/${apiRoutes.registerUser}`,
        {
          package_id: global?.selectedPackage,
          sponser_id: global.sponsorId,
          placement_id: global.placementId,
          position: global.position,
          country: global.countryId,
          region_id: global.regionId,
          self_col: global.agency,
          username: global.userName,
          name: global.name,
          gender: global.gender,
          dob: global.dateOfBirth,
          pass: global.password,
          cpass: global.confirmPassword,
          email: global.email,
          mob: global.mobileNo,
          address_1: global.addressLine1,
          address_2: global.addressLine2,
          state: global.state,
          city: global.city,
          saddress_1: global.shippingAddressLine1,
          saddress_2: global.shippingAddressLine2,
          sstate: global.shippingState,
          scity: global.shippingCity,
          acname: global.accountName,
          bname: global.bankName,
          branch: global.branchName,
          account_no: global.accountNumber,
          ifsc: global.ifscCode,
          bitcoin_wallet_code: global.bitcoinWalletCode,
          paypal_email: global.paypalEmail,
          txn_pass: transaction,
          cart_items: global.cartData,
        },
      );
      showMessageonTheScreen(response?.data?.msg);
      if(response?.data?.status == 200){
        navigation.navigate(screens.registrationPaymentSuccess)
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    } finally {
      setVisible(false);
    }
  };

  // ==================================== End ===================================== //

  const next = () => {
    registerUser();
  };

  const handleWalletSelect = option => {
    setSelectedWallet(option);
  };

  const renderBody = () => {
    return (
      <View style={styles.bodyContainer}>
        <Text style={styles.pageTitle}>Payment Method</Text>

        <View style={styles.dropdownContainer}>
          <View
            style={{
              paddingVertical: verticalScale(15),
              paddingHorizontal: scale(10),
              borderWidth: scale(1),
              borderColor: colors.darkGrey,
              borderRadius: scale(15),
            }}>
            <CustomDropDown
              placeholder="Wallet"
              data={walletData}
              onSelect={handleWalletSelect}
              selected={selectedWallet.title}
              labelKey={'title'}
              buttonStyle={styles.dropdownButtonStyle1}
              buttonTextStyle={styles.dropdownButtonText}
              arrowStyle={styles.dropdownArrow}
              menuStyle={styles.dropdownMenu}
              itemStyle={styles.dropdownItem}
              selectedItemStyle={styles.selectedItem}
              placeholderStyle={[styles.placeholder, styles.placeholderOffset]}
              textAlign={'left'}
            />

            <CustomeInputField
              placeholder={'Upline Trnsaction ID'}
              onChangeText={setTransaction}
              value={transaction}
              borderWidth={scale(1)}
              borderRadius={scale(5)}
              height={verticalScale(40)}
              borderColor={colors.darkerGrey}
              width={'100%'}
              placeholderTextColor={colors.darkGray}
              color={colors.black}
              marginTop={verticalScale(15)}
              inputWidth={'90%'}
              textInputStyle={{paddingBottom: verticalScale(8)}}
            />

            <CustomeButton
              buttoncolor={colors.theme1}
              buttonwidth={'100%'}
              buttonheight={verticalScale(35)}
              borderRadius={scale(10)}
              title={'Verify'}
              fontcolor={colors.white}
              fontSize={scale(16)}
              fontWeight={'500'}
              fontFamily={Montserrat.SemiBold}
              elevation={scale(10)}
              alignSelf={'center'}
              marginTop={verticalScale(15)}
              onPress={() =>
                transaction
                  ? checkTransaction()
                  : showMessageonTheScreen('enter upline teansaction Id')
              }
            />
          </View>
        </View>

        <CustomeButton
          buttoncolor={colors.theme1}
          buttonwidth={'100%'}
          buttonheight={verticalScale(35)}
          borderRadius={scale(10)}
          title={'Online Pay - Coming Soon'}
          fontcolor={colors.white}
          fontSize={scale(16)}
          fontWeight={'500'}
          fontFamily={Montserrat.SemiBold}
          elevation={scale(10)}
          alignSelf={'center'}
          disabled={true}
          marginTop={verticalScale(25)}
          onPress={() => ''}
        />
        <View style={{marginTop: verticalScale(55)}}>
          <View style={styles.buttonView}>
            <CustomeButtonView
              previousStep={previousStep}
              nextStep={next}
              currentPosition={currentPosition}
              labels={labels}
              previous={true}
              next={true}
            />
          </View>
          <Text style={styles.noteContainer}>
            <Text style={styles.noteText}>Note: </Text>
            <Text style={styles.secondText}>
              Please Do Only 1 Registration At a Time, Don't Login To 2 Accounts
              At Once On The Same Device
            </Text>
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      {visible && <Loader />}
      <ScrollView style={styles.container}>{renderBody()}</ScrollView>
    </View>
  );
};

export default WalletDeduct;

const styles = StyleSheet.create({
  container: {flex: 1},
  bodyContainer: {
    flex: 1,
    margin: scale(10),
    marginBottom: scale(5),
  },
  pageTitle: {
    fontSize: scale(16),
    color: colors.black,
    fontFamily: Montserrat.Bold,
    paddingLeft: scale(20),
    marginBottom: verticalScale(5),
  },
  title: {
    fontSize: scale(14),
    color: colors.black,
    fontFamily: Montserrat.Bold,
    paddingLeft: scale(20),
  },
  heading: {
    paddingLeft: 0,
    paddingBottom: verticalScale(10),
  },
  dropdownContainer: {
    backgroundColor: colors.white,
    padding: scale(13),
    elevation: scale(5),
    paddingHorizontal: scale(14),
    marginTop: verticalScale(7),
    borderRadius: scale(10),
  },
  dropdownButtonStyle: {
    borderWidth: scale(1),
    borderColor: colors.black,
    borderRadius: scale(10),
    marginTop: verticalScale(15),
  },
  dropdownButtonStyle1: {
    backgroundColor: colors.lighterGrey,
    height: verticalScale(40),
  },
  dropdownButtonText: {
    color: colors.black,
  },
  dropdownArrow: {
    color: colors.black,
  },
  dropdownMenu: {
    backgroundColor: colors.lightBlue,
  },
  dropdownItem: {
    paddingVertical: verticalScale(10),
  },
  selectedItem: {
    backgroundColor: colors.screenColor,
  },
  placeholder: {
    color: colors.grey,
  },
  placeholderOffset: {
    marginLeft: scale(-20),
  },
  checkboxTitle: {
    fontSize: scale(15),
    marginLeft: scale(10),
    fontFamily: Montserrat.SemiBold,
  },
  noteContainer: {
    marginHorizontal: scale(15),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  noteText: {
    color: colors.pink,
    fontFamily: Montserrat.SemiBold,
  },
  secondText: {
    color: colors.black,
    fontFamily: Montserrat.Medium,
    fontSize: scale(10.5),
  },
  buttonView: {
    marginTop: verticalScale(40),
    marginBottom: verticalScale(15),
  },
});
