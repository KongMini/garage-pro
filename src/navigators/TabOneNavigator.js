import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FetchApi, ModalCustomServices, Sizes, useAppTheme} from '../utils';
import TopPage from '../screens/TopPage/TopPage';
import FavoriteCustomization from '../screens/FavoriteCustomization/FavoriteCustomization';
import MyCar from '../screens/MyCar/MyCar';
import AnnouncePriceServices from '../screens/AnnouncePriceServices/AnnouncePriceServices';
import CarAppraisal from '../screens/CarAppraisal/CarAppraisal';
import RemindAccreditation from '../screens/RemindAccreditation/RemindAccreditation';
import Promotion from '../screens/Promotion/Promotion';
import PromotionDetail from '../screens/PromotionDetail/PromotionDetail';
import Booking from '../screens/Booking/Booking';
import Experience from '../screens/Experience/Experience';
import ExperienceDetail from '../screens/ExperienceDetail/ExperienceDetail';
import Introduction from '../screens/Introduction/Introduction';
import CaronGarages from '../screens/CaronGarages/CaronGarages';
import History from '../screens/History/History';
import HistoryDetail from '../screens/History/HistoryDetail';
import ServiceRating from '../screens/History/ServiceRating';
import BuyInsurance from '../screens/BuyInsurance/BuyInsurance';
import BuyInsuranceDetail from '../screens/BuyInsuranceDetail/BuyInsuranceDetail';
import FindAccessory from '../screens/FindAccessory/FindAccessory';
import FindTrafficViolation from '../screens/FindTrafficViolation/FindTrafficViolation';
import FindTrafficViolationDetail from '../screens/FindTrafficViolationDetail/FindTrafficViolationDetail';
import FindTrafficSanction from '../screens/FindTrafficSanction/FindTrafficSanction';
import ModeSetting from '../screens/ModeSetting/ModeSetting';
import LanguageSetting from '../screens/LanguageSetting/LanguageSetting';
import NewAndBlog from '../screens/NewAndBlog/NewAndBlog';
import NewAndBlogDetail from '../screens/NewAndBlogDetail/NewAndBlogDetail';
import NotFound from '../screens/NotFound/NotFound';
import Gift from '../screens/Gift/Gift';
import UserBookingHistory from '../screens/UserBookingHistory/UserBookingHistory';
import UserInfo from '../screens/UserInfo/UserInfo';
import UserInfoDetail from '../screens/UserInfoDetail/UserInfoDetail';
import UserBookingHistoryDetail from '../screens/UserBookingHistoryDetail/UserBookingHistoryDetail';
import Rescue from '../screens/Rescue/Rescue';
import HomeService from '../screens/_HomeService/HomeService';
import CarMarket from '../screens/CarMarket/CarMarket';
import CarMarketDetail from '../screens/CarMarketDetail/CarMarketDetail';
import UserHomeServiceDetail from '../screens/UserHomeServiceDetail/UserHomeServiceDetail';
import Maintain from '../screens/Maintain/Maintain';
import MaintainDetail from '../screens/MaintainDetail/MaintainDetail';
import Insurance from '../screens/Insurance/Insurance';
import InsuranceDetail from '../screens/InsuranceDetail/InsuranceDetail';
import Notification from '../screens/Notification/Notification';
import NotificationDetail from '../screens/NotificationDetail/NotificationDetail';
import {useQuery} from 'react-query';
import PopupHome from './items/PopupHome';
import CsBaoHanh from '../screens/CsBaoHanh/CsBaoHanh';

const Stack = createStackNavigator();

const TabOneNavigator = ({navigation}) => {
  const {data} = useQuery('banner-popup', FetchApi.bannerPopup);
  const {Colors} = useAppTheme();

  useEffect(() => {
    if (data) {
      ModalCustomServices.set({
        title: '',
        titleStyle: {display: 'none'},
        closeIcon: false,
        style: {
          width: undefined,
          height: undefined,
          backgroundColor: 'transparent',
        },
        wrapperStyle: {paddingVertical: 0, backgroundColor: 'transparent'},
        closeIconProps: {
          type: 'MaterialCommunityIcons',
          icon: 'close-circle',
          color: 'white',
        },
        children: () => <PopupHome data={data} navigation={navigation} />,
      });
    }
  }, [data]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TopPage" component={TopPage} />
      <Stack.Screen
        name="FavoriteCustomization"
        component={FavoriteCustomization}
      />
      <Stack.Screen name="MyCar" component={MyCar} />
      <Stack.Screen name="CsBaoHanh" component={CsBaoHanh} />
      <Stack.Screen
        name="AnnouncePriceServices"
        component={AnnouncePriceServices}
      />
      <Stack.Screen name="CarAppraisal" component={CarAppraisal} />
      <Stack.Screen
        name="RemindAccreditation"
        component={RemindAccreditation}
      />
      <Stack.Screen name="Promotion" component={Promotion} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="PromotionDetail" component={PromotionDetail} />
      <Stack.Screen name="Experience" component={Experience} />
      <Stack.Screen name="ExperienceDetail" component={ExperienceDetail} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="CaronGarages" component={CaronGarages} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
      <Stack.Screen name="ServiceRating" component={ServiceRating} />
      <Stack.Screen name="BuyInsurance" component={BuyInsurance} />
      <Stack.Screen name="BuyInsuranceDetail" component={BuyInsuranceDetail} />
      <Stack.Screen name="FindAccessory" component={FindAccessory} />
      <Stack.Screen
        name="FindTrafficViolation"
        component={FindTrafficViolation}
      />
      <Stack.Screen
        name="FindTrafficViolationDetail"
        component={FindTrafficViolationDetail}
      />
      <Stack.Screen
        name="FindTrafficSanction"
        component={FindTrafficSanction}
      />
      <Stack.Screen name="LanguageSetting" component={LanguageSetting} />
      <Stack.Screen name="ModeSetting" component={ModeSetting} />
      <Stack.Screen name="NewAndBlog" component={NewAndBlog} />
      <Stack.Screen name="NewAndBlogDetail" component={NewAndBlogDetail} />
      <Stack.Screen name="NotFound" component={NotFound} />
      <Stack.Screen name="Gift" component={Gift} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="UserBookingHistory" component={UserBookingHistory} />
      <Stack.Screen name="UserInfoDetail" component={UserInfoDetail} />
      <Stack.Screen
        name="UserBookingHistoryDetail"
        component={UserBookingHistoryDetail}
      />
      <Stack.Screen name="Rescue" component={Rescue} />
      <Stack.Screen name="HomeService" component={HomeService} />
      <Stack.Screen name="CarMarket" component={CarMarket} />
      <Stack.Screen name="CarMarketDetail" component={CarMarketDetail} />
      <Stack.Screen
        name="UserHomeServiceDetail"
        component={UserHomeServiceDetail}
      />
      <Stack.Screen name="Maintain" component={Maintain} />
      <Stack.Screen name="MaintainDetail" component={MaintainDetail} />
      <Stack.Screen name="Insurance" component={Insurance} />
      <Stack.Screen name="InsuranceDetail" component={InsuranceDetail} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="NotificationDetail" component={NotificationDetail} />
    </Stack.Navigator>
  );
};
export default TabOneNavigator;
