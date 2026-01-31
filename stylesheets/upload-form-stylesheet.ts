import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },

  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  emptyFieldErrorText: {
    color: 'red',
    marginBottom: 8,
    marginTop: -4, 
    fontSize: 11
  },

  multiline: {
    height: 80,
    textAlignVertical: 'top',
  },

  actions: {
    marginTop: 10,
  },

  submitButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  cancel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  submit: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  uploadOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
    borderStyle: 'dashed',
    borderWidth: 2,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  tapToSelectText: {
    color: '#999',
    fontSize: 14,
  },
})
export default styles