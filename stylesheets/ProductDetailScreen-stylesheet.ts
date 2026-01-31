import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 10,
    },
    image: {
         width: "100%", 
         height: 250 
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 10, 
        color: '#fff' 
    },
    productPrice: {
        fontSize: 16,
        marginTop: 5,
        color: '#fff', 
    },
    productDescriptionHead: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#fff'
    },
    productDescription: {
        fontSize: 14,
        marginTop: 5,
        color: '#fff'
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 20, 
        position: 'absolute', 
        bottom: 65, 
        width: '100%'
    },
    editBtn: {
        paddingHorizontal: 60, 
        paddingVertical: 10, 
        borderWidth: 1, 
        backgroundColor: 'green', 
        borderRadius: 5
    },
    btnText: {
        color: 'white'
    },
    deleteBtn: {
        paddingHorizontal: 60, 
        paddingVertical: 10, 
        borderWidth: 1, 
        backgroundColor: 'red', 
        borderRadius: 5
    },
});

export default styles;