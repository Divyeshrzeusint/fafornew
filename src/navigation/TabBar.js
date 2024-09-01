import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import strings from '../constants/strings';
import colors from '../themes/colors';
import AppText from '../components/AppText';
import {Montserrat} from '../themes/fonts';
import icons from '../themes/icons';
import {moderateScale, moderateWidth} from '../utils/responsive';

const TabBar = ({state, descriptors, navigation}) => {
  const tabIcons = {
    Home: icons.dashboard,
    UserProfile: icons.useProfile,
    LeadershipAndRanking: icons.leadershipRanking,
    Support: icons.support,
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const screenName = strings.screenTitles[label];
        const icon = tabIcons[label];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            <Image
              source={icon}
              style={[
                styles.icon,
                index == 0 && {tintColor: colors.greenAccent},
              ]}
            />
            <AppText
              label={screenName}
              fontFamily={Montserrat.Regular}
              size={'extraSmall'}
              color={colors.black}
              centered
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop: moderateScale(7),
    paddingHorizontal: moderateWidth(5),
    paddingBottom: moderateScale(3),
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
  },
  tab: {flex: 1, alignItems: 'center', marginVertical: moderateScale(3)},
  icon: {
    height: moderateScale(23),
    width: moderateScale(23),
    resizeMode: 'contain',
    marginBottom: moderateScale(3.3),
  },
});
