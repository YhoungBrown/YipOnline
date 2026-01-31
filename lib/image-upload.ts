import * as ImagePicker from 'expo-image-picker';
import { Alert, Platform } from "react-native";
import Toast from "react-native-toast-message";

export const requestPermissions = async (): Promise<boolean> => {
  if (Platform.OS !== 'web') {
    const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (libraryStatus !== 'granted') {
      Toast.show({
        type: 'error',
        text1: 'Permission Required',
        text2: 'Please enable camera and media library permissions in your device settings.',
      });
      return false;
    }

    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraStatus !== 'granted') {
      Toast.show({
        type: 'error',
        text1: 'Permission Required',
        text2: 'Sorry, we need camera permissions to take photos!',
      });
      return false;
    }
  }
  return true;
};

export const pickImageFromGallery = async (setSelectedImage: (uri: string | null) => void) => {
  const hasPermission = await requestPermissions();
  if (!hasPermission) return;

  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setSelectedImage(result.assets[0].uri);
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Gallery Failure',
      text2: 'Failed to pick image from gallery',
    });
  }
};

export const takePhotoWithCamera = async (setSelectedImage: (uri: string | null) => void) => {
  const hasPermission = await requestPermissions();
  if (!hasPermission) return;

  try {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets[0]) {
      setSelectedImage(result.assets[0].uri);
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Camera Failure',
      text2: 'Failed to take photo with camera',
    });
  }
};

export const showImageOptions = (setSelectedImage: (uri: string | null) => void) => {
  Alert.alert(
    'Select Image',
    'Choose an option',
    [
      { text: 'Camera', onPress: () => takePhotoWithCamera(setSelectedImage) },
      { text: 'Photo Library', onPress: () => pickImageFromGallery(setSelectedImage) },
      { text: 'Cancel', style: 'cancel' },
    ],
    { cancelable: true }
  );
};
