import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import color from "../shared/color";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userNameText}>Anonymous user</Text>
        </View>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
          }}
          style={styles.userImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: color.white,
  },
  userNameText: {
    color: color.white,
  },
});
