import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import { persistor, store } from '../redux-store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useColorScheme } from '@/hooks/use-color-scheme'
import Toast from 'react-native-toast-message'
import { toastConfig } from '@/components/custom-toast'



export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            
            <Stack initialRouteName="index">
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="Home-screen" options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetailScreen" options={{ headerShown: false }} />
              <Stack.Screen
                name="modal"
                options={{ presentation: 'modal', title: 'Modal' }}
              />
            </Stack>

            <StatusBar style="auto" />
            <Toast config={toastConfig} />
          </>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
