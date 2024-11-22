import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    setSliderList([
      {
        id: 1,
        name: "slider 1",
        imageUrl:
          "https://static-cse.canva.com/blob/1760641/1600w-wK95f3XNRaM.jpg",
      },
      {
        id: 2,
        name: "slider 2",
        imageUrl:
          "https://static-cse.canva.com/blob/1760641/1600w-wK95f3XNRaM.jpg",
      },
    ]);
  }, []);
  return (
    <View>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={sliderList.id}
        renderItem={({ item, index }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.sliderImage} />
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("screen").width * 0.88,
    height: 170,
    marginTop: 12,
    borderRadius: 10,
    marginRight: 10,
  },
});
