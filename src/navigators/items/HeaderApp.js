import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {AppImage, AppText} from '../../elements';
import {useNotificationBadge} from '../../hooks';
import {ResetFunction, Sizes, Svgs, useAppTheme} from '../../utils';
import {search, user} from '../../utils/icons';
import {DrawerButton} from './DrawerButton';

const HeaderApp = ({navigation}) => {
  const {Colors} = useAppTheme();
  const insets = useSafeAreaInsets();
  const {badge} = useNotificationBadge();

  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.primary,
        marginTop: insets.top,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{flex: 1}}>
        <DrawerButton />
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => ResetFunction.resetToHome(navigation)}>
          <AppImage
            source={require('../../utils/images/caron_primary.png')}
            style={{
              width: Sizes.width(30),
              height: Sizes.width(10),
              alignItems: 'flex-start',
              marginLeft: 10,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        {/* <TouchableOpacity 
          onPress={() => {
            // navigation.navigate('NotFound');
          }}>
          <AppImage
            source={search}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity> */}

        <TouchableOpacity
          style={{marginHorizontal: 16}}
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          {!!badge.all && (
            <View
              style={{
                position: 'absolute',
                zIndex: 100,
                width: 16,
                height: 16,
                borderRadius: 8,
                right: -2,
                top: 1.5, 
                backgroundColor: 'white',
                borderWidth: 1.5,
                borderColor: Colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <AppText style={{fontSize: 8, color: Colors.primary}}>
                {badge.all}
              </AppText>
            </View>
          )}
          <Svgs.ThongBao />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserInfo');
          }}>
          <AppImage
            source={user}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderApp;
