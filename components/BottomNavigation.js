import Home from '../screens/Home';
import Order from '../screens/Order';
import Favorite from '../screens/Favorite';
import Profile from '../screens/Profile';
import {Ionicons} from '@expo/vector-icons';

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {height: 90}
        }}>
            <Tab.Screen name="home" component={Home} options={{
                tabBarIcon: () => <Ionicons name="home-outline" size={26} />
            }} />
            <Tab.Screen name="favorite" component={Favorite} options={{
                tabBarIcon: () => <Ionicons name="heart-outline" size={26} color='#8F8888' />
            }} />
            <Tab.Screen name="order" component={Order} options={{
                tabBarIcon: () => <Ionicons name="cart-outline" size={26} color='#8F8888' />
            }} />
            <Tab.Screen name="profile" component={Profile} options={{
                tabBarIcon: () => <Ionicons name="notifications-outline" size={26} color='#8F8888' />
            }} />
        </Tab.Navigator>
    );
}

export default BottomNavigation;