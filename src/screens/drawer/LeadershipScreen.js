import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import images from '../../themes/images';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {moderateScale, moderateWidth} from '../../utils/responsive';
import globalStyles from '../../themes/globalStyles';
import colors from '../../themes/colors';
import AppText from '../../components/AppText';
import strings from '../../constants/strings';
import {Montserrat} from '../../themes/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {
  getLeadership,
  getLeadershipClear,
} from '../../redux/slices/getLeadership';
import {Loader} from '../../components/Loader';

let ranks = {
  ambassador: '0',
  crown: '0',
  diamond: '0',
  director: '0',
  gold: '0',
  ruby: '0',
  sliver: '1',
};

const rankList = [
  {id: 0, image: images.sliver, key: 'sliver'},
  {id: 1, image: images.gold, key: 'gold'},
  {id: 2, image: images.ruby, key: 'ruby'},
  {id: 3, image: images.diamond, key: 'diamond'},
  {id: 4, image: images.ambassador, key: 'ambassador'},
  {
    id: 5,
    image: images.crown,
    key: 'crown',
    imgStyle: {height: moderateScale(80)},
  },
  {id: 6, image: images.director, key: 'director'},
];

const LeadershipScreen = ({navigation}) => {
  const [leadershipRank, setLeadershipRank] = useState({});

  const dispatch = useDispatch();
  const getLeadershipRes = useSelector(state => state.getLeadership);

  useEffect(() => {
    const data = {
      id: global?.userData?.id,
      self_id: global?.userData?.self_id,
    };
    dispatch(getLeadership(data));
  }, []);

  useEffect(() => {
    if (getLeadershipRes?.data) {
      setLeadershipRank(getLeadershipRes?.data?.rank);
    }
    if (getLeadershipRes?.error) {
      Alert.alert(strings.faforlife, getLeadershipRes?.error);
      dispatch(getLeadershipClear());
    }
  }, [getLeadershipRes]);

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.rankContainer}>
          <Image
            source={item?.image}
            style={[styles.rankImage, item?.imgStyle && item?.imgStyle]}
          />
        </View>
        <AppText
          label={
            leadershipRank[item?.key] == 1
              ? strings.achieved
              : strings.inProgress
          }
          size={'extraSmall'}
          fontFamily={Montserrat.SemiBold}
          color={colors.white}
          textStyles={[
            styles.status,
            {
              backgroundColor:
                leadershipRank[item?.key] == 1 ? colors.green : colors.pink,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity
        style={styles.menuContainer}
        onPress={() => navigation?.toggleDrawer()}>
        <SimpleIcon name={'menu'} size={25} color={colors.black} />
      </TouchableOpacity>
      <ScrollView>
        <Image source={images.leaderHead} style={styles.leaderHead} />
        <Image source={images.star} style={styles.starsIcon} />
        <AppText
          label={strings.leadershipRankAndAchivements}
          size={'meduim'}
          fontFamily={Montserrat.SemiBold}
          color={colors.black}
          centered
        />
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={rankList}
          keyExtractor={(_, i) => i.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
      {getLeadershipRes?.isLoading && <Loader />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  menuContainer: {
    marginTop: globalStyles.statusBarMargin,
    marginLeft: moderateWidth(5),
  },
  leaderHead: {
    height: moderateScale(80),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  starsIcon: {
    height: moderateScale(30),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  rankContainer: {
    width: moderateScale(100),
    height: moderateScale(100),
    backgroundColor: colors.white,
    marginBottom: moderateScale(7),
    marginHorizontal: moderateScale(7),
    borderRadius: moderateScale(7),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  rankImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    resizeMode: 'contain',
  },
  listContainer: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    marginBottom: moderateScale(70),
  },
  status: {
    alignSelf: 'center',
    marginBottom: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(2),
    borderRadius: moderateScale(3),
  },
});

export default LeadershipScreen;
