import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import React, { useState } from 'react'
import styles from '@/stylesheets/upload-form-stylesheet'

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
  const [photoUrl, setPhotoUrl] = useState<string>('')

  const handleSubmit = () => {
    if (!name || !price) return

    onSubmit({
      name,
      price: Number(price),
      description,
      photoUrl,
    })

    
    setName('')
    setPrice('')
    setDescription('')
    setPhotoUrl('')
    onClose()
  }

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Add Product</Text>

          <TextInput
            placeholder="Product name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <TextInput
            placeholder="Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={[styles.input, styles.multiline]}
            multiline
          />

          <TextInput
            placeholder="Photo URL"
            value={photoUrl}
            onChangeText={setPhotoUrl}
            style={styles.input}
          />

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
    </Modal>
  )
}

export default UploadForm
