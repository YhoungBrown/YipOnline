import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         borderWidth: 1, 
         borderColor: '#ccc', 
         borderRadius: 10, 
         overflow: 'hidden', 
         marginBottom: 16 , 
         padding: 10, 
    },
    innerContainer: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    image: {
        width:"40%", 
        height: 100 , 
        borderTopLeftRadius: 10, 
        borderBottomLeftRadius: 10
    },
    textSection: {
        flex: 1, 
        marginLeft: 10,    
    },
    name: {
        fontWeight: 'bold', 
        fontSize: 22, 
        color: "#fff"
    },
    price: {
        color: '#fff', 
        fontSize: 14, 
        marginTop: 5 ,
        lineHeight: 20
    },
    description: {
        color: '#666', 
        fontSize: 12 , 
        marginTop: 5,
    },
});

export default styles;