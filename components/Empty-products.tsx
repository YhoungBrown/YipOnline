import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const Emptyproducts = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/emptyIcon.png")} style={styles.image} />
      <Text style={styles.text}>
       You have No products yet, 
       {`\n`}click on the + icon to add products
      </Text>

      <TouchableOpacity style={styles.button}>
        {/* <Text style={{ color: 'white' }}>Add Product</Text> */}
        <Entypo 
          name="plus" 
          size={24} 
          color="white" 
        />
      </TouchableOpacity>
    </View>
  )
}

export default Emptyproducts



const styles = StyleSheet.create({
container: {
   flex: 1, 
   justifyContent: 'center', 
   alignItems: 'center', 
   paddingHorizontal: 20
},
image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
},
text: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: -20,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 150,
    width: 60,
    marginTop: 20,
    backgroundColor: 'green',
  }
})