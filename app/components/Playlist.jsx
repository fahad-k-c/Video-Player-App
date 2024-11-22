import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import color from "../shared/color";

const Playlist = () => {
  const courseList = [
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
      <Text style={styles.heading}>Top Course Playlist</Text>
      <FlatList
        data={courseList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Playlist;

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
    width: 220,
    height: 130,
    marginRight: 15,
    borderRadius: 5,
  },
  text: { color: color.white, fontSize: 17, padding: 5 },
});
