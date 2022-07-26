import {View, Text, StyleSheet, Pressable, Image} from "react-native";
import {Ionicons} from '@expo/vector-icons';

import Img1 from '../assets/images/img1.png';
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';
import Img4 from '../assets/images/img4.png';

function CoffeeGrid() {
    return (
        <View>
            <View style={styles.rowContainer}>
                <Pressable android_ripple={{color: '#cccccc'}} style={styles.card}>
                    <Image source={Img1} style={styles.imageStyle} />
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.subtitle}>with Chocolate</Text>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amountStyle}>Rs. 180</Text>
                        <Ionicons name="add-outline" size={20} color='white' style={styles.addIcon} />
                    </View>
                </Pressable>
                <Pressable android_ripple={{color: '#cccccc'}} style={styles.card}>
                    <Image source={Img2} style={styles.imageStyle} />
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.subtitle}>with Chocolate</Text>
                    <View>
                        <Text>Rs. 180</Text>
                        <Text>+</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable android_ripple={{color: '#cccccc'}} style={styles.card}>
                    <Image source={Img3} style={styles.imageStyle} />
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.subtitle}>with Chocolate</Text>
                    <View>
                        <Text>Rs. 180</Text>
                        <Text>+</Text>
                    </View>
                </Pressable>
                <Pressable android_ripple={{color: '#cccccc'}} style={styles.card}>
                    <Image source={Img4} style={styles.imageStyle} />
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.subtitle}>with Chocolate</Text>
                    <View>
                        <Text>Rs. 180</Text>
                        <Text>+</Text>
                    </View>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable android_ripple={{color: '#cccccc'}} style={styles.card}>
                    <Image source={Img1} style={styles.imageStyle} />
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.subtitle}>with Chocolate</Text>
                    <View>
                        <Text>Rs. 180</Text>
                        <Text>+</Text>
                    </View>
                </Pressable>
                <Pressable android_ripple={{color: '#cccccc'}} style={styles.card}>
                    <Image source={Img2} style={styles.imageStyle} />
                    <Text style={styles.title}>Cappuccino</Text>
                    <Text style={styles.subtitle}>with Chocolate</Text>
                    <View>
                        <Text>Rs. 180</Text>
                        <Text>+</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export default CoffeeGrid;

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    card: {
        elevation: 2,
        width: '40%',
    },
    imageStyle: {
        width: 155,
        height: 155,
        borderRadius: 15
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        paddingTop: 10,
        paddingHorizontal: 10,
        color: '#1b1919'
    },
    subtitle: {
        fontSize: 14,
        color: '#948585',
        paddingHorizontal: 10
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    amountStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10
    },
    addIcon: {
        backgroundColor: '#C67C4E',
        padding: 5,
        borderRadius: 8
    }
});