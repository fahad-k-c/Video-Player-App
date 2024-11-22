
import HomeScreenNavigation from "./Navigation/HomeScreenNavigation";
import { Text, View } from "react-native";
import color from "./shared/color"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding:20,
        marginTop:20,
        backgroundColor:color.blank
      }}
    >
      <HomeScreenNavigation/>
     
    </View>
  );
}
