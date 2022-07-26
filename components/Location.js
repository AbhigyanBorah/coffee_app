import {View, Text, StyleSheet, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function Location() {
    return (
        <View style={styles.rootContainer}>
            <View>
                <Text style={styles.textLocation}>
                    Location
                </Text>
                <View style={styles.placeContainer}>
                    <Text style={styles.textPlace}>
                        Guwahati, Assam
                    </Text>
                    <Ionicons name='chevron-down-outline' size={16} color='#E1D2D2' />
                </View>
            </View>
            <Image source={require('../assets/images/profile.png')} />
        </View>
    );
}

export default Location;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        paddingTop: 55,
        paddingHorizontal: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25
    },
    textLocation: {
        color: '#B6A9A9',
        fontSize: 14,
    },
    textPlace: {
        color: '#E1D2D2',
        fontSize: 17,
        fontWeight: '800',
        paddingRight: 6,
    },
    placeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});