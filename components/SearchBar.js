import {View, TextInput, StyleSheet, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

function SearchBar() {
    return (
        <View style={styles.searchBar}>
            <View style={styles.searchContainer}>
                <Ionicons name='search-outline' size={28} color='#E1D2D2' />
                <TextInput style={styles.searchText} placeholder='Search coffee' placeholderTextColor='#B6A9A9'></TextInput>
            </View>
            <View style={styles.searchListContainer}>
                <Image source={require("../assets/vectors/menu.png")} />
            </View>
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 5,
        borderRadius: 15,
        marginHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 6,
    },
    searchText: {
        color: '#B6A9A9',
        paddingLeft: 14,
    },
    searchListContainer: {
        backgroundColor: '#C67C4E',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 13
    },
});