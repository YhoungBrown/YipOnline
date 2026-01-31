import { View, Text, ActivityIndicator, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux-store'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router'
import styles from '@/stylesheets/ProductDetailScreen-stylesheet'
import UploadForm from '@/components/Upload-form'
import { updateProduct, removeProduct } from '@/redux-slice/product-slice'



const ProductDetailScreen = () => {
  const inset = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const product = useSelector((state: RootState) =>
    state.product.products.find(p => p.id === id)
  )

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)

    navigation.setOptions({
    headerShown: false,
  })
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
        <Text>Loading product details...</Text>
      </View>
    )
  }

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Product not found</Text>
      </View>
    )
  }

  return (
    <View
      style={[styles.container, {
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
      }]}
    >
      <Image
        source={{ uri: product.photoUrl }}
        style={styles.image}
      />
      <Text style={styles.productName}>Product Name: {product.name}</Text>

      <Text style={styles.productPrice}>Price: ${product.price}</Text>

      <View>
        <Text style={styles.productDescriptionHead}>Description:</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>

      <View style={styles.buttonContainer}>

        {!open && (
        <>
        <TouchableOpacity 
            style={styles.editBtn}
             onPress={() => setOpen(!open)}
            >
            <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
      
        <TouchableOpacity 
            style={styles.deleteBtn}
            onPress={() => {dispatch(removeProduct(product.id)); navigation.goBack();}}
            >
            <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
        </> 
        )}
      </View>


      <UploadForm
        singleProduct={product}
        visible={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) =>
          dispatch(
            updateProduct({
              id: product.id,
              ...data,
            })
          )
        }
      />
    </View>
  )
}

export default ProductDetailScreen
