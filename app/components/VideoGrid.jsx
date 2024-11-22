import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import color from "../shared/color";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

const VideoGrid = () => {
  const navigation = useNavigation();
  const videoList = [
    {
      id: 1,
      name: "Figma Course",
      imageUrl:
        "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2151104281/settings_images/RnmL5lS2RU6psTK4Nrot_file.jpg",
    },
    {
      id: 2,
      name: "Angular Course",
      imageUrl:
        "https://i.ytimg.com/vi/DK8M-ZFjaMw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASyepn1rm0T5unIZOVeB0Ee66D3A",
    },
    {
      id: 3,
      name: "React Course",
      imageUrl:
        "https://media.licdn.com/dms/image/D4D12AQHgTekNAv57eA/article-cover_image-shrink_600_2000/0/1704795493933?e=2147483647&v=beta&t=pyrfoiclAWznovzULQpO5bFdQuQFSviqQNkMTCfsfPk",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Video</Text>
      <FlatList
        data={videoList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate("playVideo")}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

export default VideoGrid;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontSize: 20,
    color: color.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get("screen").width * 0.4,
    height: 100,
    marginRight: 15,
    margin: 5,
    borderRadius: 7,
  },
  text: { color: color.white, fontSize: 13, padding: 5 },
});
