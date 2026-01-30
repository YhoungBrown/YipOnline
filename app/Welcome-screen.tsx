import { View, Text, Image, StyleSheet, Dimensions, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from '@/stylesheets/welcome-screen-stylesheet'
import { useSafeAreaInsets } from 'react-native-safe-area-context'



const WelcomeScreen = () => {
    const inset = useSafeAreaInsets();
  return (
    <View style={[
        styles.container,
        { paddingBottom: inset.bottom }
        ]}>
      
      
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/OIP.png')}
          style={styles.image}
          resizeMode="cover"
        />

        
        <LinearGradient
          colors={['transparent', 'white']}
          style={styles.fade}
        />
      </View>

      
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.brand}>YipLimited</Text>
      </View>

      <TouchableOpacity 
        style={styles.welcomeButton}
        onPress={() => {
          // Handle button press, e.g., navigate to the main app
        }}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}

export default WelcomeScreen
