import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux-store'
import Emptyproducts from '@/components/Empty-products'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const HomeScreen = () => {
    const inset = useSafeAreaInsets();
     const product = useSelector((state: RootState) => state.product.products)
  return (
    <View style={{ flex: 1, paddingTop: inset.top, paddingBottom: inset.bottom }}>
        {
            product.length === 0 ? (
                <Emptyproducts  />
            ) : (
                <Text>Products Available</Text>
            )
        }
      <Text>Home-screen</Text>
    </View>
  )
}

export default HomeScreen