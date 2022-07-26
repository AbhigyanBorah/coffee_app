import {View, Text, StyleSheet, ImageBackground, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

function PromoContainer() {
    return (
        <View style={styles.imageContainer}>
            <ImageBackground source={require('../assets/images/promo.png')} style={styles.background} imageStyle={styles.imageStyle} resizeMode='cover'>
                <View style={styles.promoTextContainer}>
                    <Text style={styles.promoText}>Promo</Text>
                </View>
                <View style={styles.freeTextContainer}>
                    <Text style={styles.freeText}>Buy one get</Text>
                    <Text style={styles.freeText}>one FREE</Text>
                </View>
            </ImageBackground>
        </View>

    );
}

export default PromoContainer;

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: -75,
        marginHorizontal: 35
    },
    background: {
        width: width - 70,
        height: width * 0.4,
    },
    imageStyle: {
        borderRadius: 16,
    },
    promoText: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#ED5151',
        borderRadius: 8
    },
    promoTextContainer: {
        width: 100,
        padding: 18,
    },
    freeText: {
        color: '#ffffff',
        fontSize: 38,
        fontWeight: 'bold',
    },
    freeTextContainer: {
        marginLeft: 30,
        marginBottom: 20
    }
});