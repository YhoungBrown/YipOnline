import { showImageOptions } from '@/lib/image-upload';
import { RootState } from '@/redux-store';
import styles from '@/stylesheets/upload-form-stylesheet';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';



interface UploadFormProps {
  visible: boolean
  onClose: () => void
  onSubmit: (data: {
    name: string
    price: number
    description: string
    photoUrl: string
  }) => void
}

const UploadForm = ({ visible, onClose, onSubmit }: UploadFormProps) => {

  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emptyName, setEmptyName] = useState<boolean>(false)
  const [emptyPrice, setEmptyPrice] = useState<boolean>(false)
  const [emptyDescription, setEmptyDescription] = useState<boolean>(false)
   const [emptyImage, setEmptyImage] = useState<boolean>(false)
   const [maxProduct, setmaxProduct] = useState<boolean>(false)

  const products = useSelector((state: RootState) => state.product.products);




  useFocusEffect(
    useCallback(() => {
        if (products.length >= 5) {
            setmaxProduct(true)
        } else {
            setmaxProduct(false)
        }
    }, [products.length])
    );

    useEffect(() => {
        if (selectedImage) {
            setEmptyImage(false)
        }
    }, [selectedImage])


  const handleSubmit = () => {

    if (maxProduct) {
      Toast.show({
        type: 'error',
        text1: 'Maximum Products Reached',
        text2: 'You have reached the maximum number of products allowed.',
      });

      setName('')
      setPrice('')
      setDescription('')
      setSelectedImage(null)

      onClose()
      return;
    }

    if(!name){
      setEmptyName(true)
      return
    }
    if(!price){
      setEmptyPrice(true)
      return
    }
    if(!description){
      setEmptyDescription(true)
      return
    }

    if(!selectedImage){
      setEmptyImage(true)
      return
    }

  onSubmit({
    name,
    price: Number(price),
    description,
    photoUrl: selectedImage, 
  })

  
  setName('')
  setPrice('')
  setDescription('')
  setSelectedImage(null)

  onClose()
}


  return (
    <Modal visible={visible} animationType="slide" transparent>
    <ScrollView keyboardShouldPersistTaps="handled">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Add Product</Text>

          <TextInput
            placeholder="Product name"
            value={name}
            onChangeText={(text) => { setName(text); setEmptyName(false); }}
            style={[styles.input, emptyName ? {borderColor: 'red'} : { borderColor: '#ddd',}]}
          />
          {emptyName && (<Text style={styles.emptyFieldErrorText}>Please enter product name</Text>)}

          <TextInput
            placeholder="Price"
            value={price}
            onChangeText={(text) => { setPrice(text); setEmptyPrice(false); }}
            keyboardType="numeric"
            style={[styles.input, emptyPrice ? {borderColor: 'red'} : { borderColor: '#ddd',}]}
          />
          {emptyPrice && (<Text style={styles.emptyFieldErrorText}>Please enter product price</Text>)}

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={(text) => { setDescription(text); setEmptyDescription(false); }}
            style={[styles.input, styles.multiline, emptyDescription ? {borderColor: 'red'} : { borderColor: '#ddd',}]}  
            multiline
          />
          {emptyDescription && (<Text style={styles.emptyFieldErrorText}>Please enter product description</Text>)}
          

            <TouchableOpacity
            onPress={() => showImageOptions(setSelectedImage)}
            style={[styles.input, styles.uploadOpacity, emptyImage ? {borderColor: 'red'} : { borderColor: '#ddd',}]}
            >
                {selectedImage ? (
                    <Image
                        source={{ uri: selectedImage }}
                        style={styles.selectedImage}
                        resizeMode="cover"
                    />
                ) : (
                    <Text style={styles.tapToSelectText}>
                        Tap to select an image
                    </Text>
                )}
            </TouchableOpacity>
            {emptyImage && (<Text style={styles.emptyFieldErrorText}>Please select a product image</Text>)}

          <View style={styles.actions}>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submit}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
    </Modal>
  )
}

export default UploadForm
