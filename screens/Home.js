import {StyleSheet, View, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Location from '../components/Location';
import SearchBar from '../components/SearchBar';
import PromoContainer from '../components/PromoContainer';
import HorizontalScroll from '../components/HorizontalScroll';
import CoffeeGrid from '../components/CoffeeGrid';

function Home() {
    return (
        <>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.topContainer}>
                        <LinearGradient colors={['#000000', '#232222']} style={styles.container}>
                            <Location />
                            <SearchBar />
                        </LinearGradient>
                    </View>
                    <View style={styles.bodyContainer}>
                        <PromoContainer />
                        <HorizontalScroll />
                        <CoffeeGrid />
                    </View>
                </ScrollView>
            </View>
        </>
        /*  {/* <ScrollView>
       <View style={styles.topContainer}>
         <LinearGradient colors={['#000000', '#232222']} style={styles.container}>
           <Location />
           <SearchBar />
         </LinearGradient>
       </View>
       <View style={styles.bodyContainer}>
         <PromoContainer />
         <HorizontalScroll />
         <CoffeeGrid />
       </View>
     </ScrollView> */

    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        height: 280,
    },
    bodyContainer: {
        flex: 1,
        // backgroundColor: 'red'
    }
});