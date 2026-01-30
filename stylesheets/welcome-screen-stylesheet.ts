import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageWrapper: {
    height: height * 0.8, 
    width: '100%',
  },

  image: {
    height: '100%',
    width: '100%',
  },

  fade: {
    position: 'absolute',
    bottom: 0,
    height: 120, // controls smoothness of fade
    width: '100%',
  },

  content: {
    flex: 1,
    position: 'absolute',
    bottom: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    color: '#555',
  },

  brand: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  welcomeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 60,
    width: '90%',
  },
  continueText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold' 
  },
})
export default styles;