import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading>Trackr</Heading>
      <Text>The app that helps users take back control of their time!</Text>
    </View>
  );
}
