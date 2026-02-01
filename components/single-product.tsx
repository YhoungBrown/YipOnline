import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '@/stylesheets/SingleProductGrid-stylesheet'


interface SingleProductGridProps {
  productId: string
  name: string
  price: number
  description: string
  photoUrl: string
  onPress?: () => void
}


const SingleProductGrid = (props: SingleProductGridProps) => {

  return (
    <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >

        <Image 
            source={{ uri: props.photoUrl }} 
            style={styles.image} />

        <Text style={styles.name}>{props.name}</Text>

        <Text style={styles.price}>{`Price: $${props.price}`}</Text>

        <Text style={styles.description}>{props.description}</Text>
    </TouchableOpacity>
  )
}

export default SingleProductGrid