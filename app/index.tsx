import { bg, fb, text } from "@/app/utility/utilityStyles";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={[style.container, fb.row, fb.aiCenter, fb.juEvenly,]}>
      <Text style={[style.box, text.white, bg.info]}>Box 1</Text>
      <Text style={[style.box, text.light, bg.primary]}>Box 2</Text>
      <Text style={[style.box, text.white, bg.secondary]}>Box 3</Text>
      <Text style={[style.box, text.dark, bg.warning]}>Box 4</Text>
      <Text style={[style.box, text.white, bg.gray500]}>Box 5</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 500,
    width: "95%",
    marginHorizontal: 10,
    borderBlockColor: "black",
    marginTop: 100,
    borderWidth: 3,
    borderColor: "#101820FF",
    backgroundColor: "aliceblue",
  
  },
  box:{
    margin:2,
    height:60,
    width:60

  }
});
