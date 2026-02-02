import { addProduct } from "@/redux-slice/product-slice";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch } from "react-redux";
import UploadForm from "./Upload-form";

const Emptyproducts = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      
      <View style={styles.centerContent}>
        <Image
          source={require("../assets/images/emptyIcon.png")}
          style={styles.image}
        />

        <Text style={styles.text}>
          You have no products yet,{`\n`}
          click on the + icon to add products
        </Text>
      </View>

      
      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        <Entypo name="plus" size={24} color="white" />
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
};

export default Emptyproducts;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },

  centerContent: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: -12,
  },

  text: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },

  button: {
    position: "absolute",
    bottom: 24,
    right: 14,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
  },
});
