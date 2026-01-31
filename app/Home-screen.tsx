import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux-store'
import Emptyproducts from '@/components/Empty-products'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SingleProductGrid from '@/components/single-product'
import SingleProductList from '@/components/SingleProductList'
import Ionicons from '@expo/vector-icons/Ionicons';
import UploadForm from '@/components/Upload-form'
import { Entypo } from '@expo/vector-icons'
import { addProduct } from '@/redux-slice/product-slice'
import styles from '@/stylesheets/homescreen-stylesheet'
import { router } from 'expo-router'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
  const [listView, setListView] = useState<boolean>(false);
  const inset = useSafeAreaInsets();
  const product = useSelector((state: RootState) => state.product.products);

  return (
    <View style={[styles.container, { paddingTop: inset.top, paddingBottom: inset.bottom }]}>
      
      
      <TouchableOpacity
        onPress={() => setListView(!listView)}
        style={{ alignSelf: 'flex-end', marginBottom: 10 }}
      >
        {listView ? (
          <Ionicons name="list" size={24} color="white" />
        ) : (
          <Ionicons name="grid-outline" size={24} color="white" />
        )}
      </TouchableOpacity>

    
      <ScrollView style={{ flex: 1 }}>
        {product.length === 0 ? (
          <Emptyproducts />
        ) : (
          product.map((item) =>
            listView ? (
              <SingleProductList
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                photoUrl={item.photoUrl}
                onPress={() => router.push({
                  pathname: "/[id]",
                  params: { id: item.id }
                })}
              />
            ) : (
              <SingleProductGrid
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                photoUrl={item.photoUrl}
                onPress={() => router.push({
                  pathname: "/[id]",
                  params: { id: item.id }
                })}
              />
            )
          )
        )}
      </ScrollView>

      <TouchableOpacity style={styles.button}
      onPress={() => setOpen(!open)}
      >
       
        <Entypo 
          name="plus" 
          size={24} 
          color="white" 
        />
      </TouchableOpacity>

       <UploadForm
        visible={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) =>
          dispatch(
            addProduct({
              id: Date.now().toString(),
              ...data,
            })
          )
        }
      />
    </View>
  );
}

export default HomeScreen;
