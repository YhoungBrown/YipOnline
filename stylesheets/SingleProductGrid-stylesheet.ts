import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
         borderWidth: 1, 
         borderColor: '#ccc', 
         borderRadius: 10, 
         overflow: 'hidden', 
         marginBottom: 16 , 
         padding: 10, 
         paddingBottom: 20
    },
    image: {
        width:"100%", 
        height: 200 , 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
    },
    name: {
        fontWeight: 'bold', 
        fontSize: 22, 
        color: "#fff"
    },
    price: {
        color: '#fff', 
        fontSize: 14, 
        marginTop: 5 
    },
    description: {
        color: '#666', 
        fontSize: 12 , 
        marginTop: 5
    },
});

export default styles;