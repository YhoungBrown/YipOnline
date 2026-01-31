import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '@/stylesheets/SingleProductList-stylesheet'



interface SingleProductListProps {
  key: string
  name: string
  price: number
  description: string
  photoUrl: string
}


const SingleProductList = (props: SingleProductListProps) => {

  return (
    <TouchableOpacity key={props.key} 
        style={styles.container}>
        <View style={styles.innerContainer}>
            {/* <View> */}
             <Image 
                source={{ uri: props.photoUrl }} 
                style={styles.image} 
            />
            {/* </View> */}

            <View style={styles.textSection}>
                <Text style={styles.name}>{props.name}</Text>

                <Text style={styles.price}>{`Price: $${props.price}`}</Text>

                <Text style={styles.description} numberOfLines={2}>{props.description}</Text>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default SingleProductList