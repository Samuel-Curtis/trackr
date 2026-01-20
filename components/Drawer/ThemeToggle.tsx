import { Sun } from "lucide-react-native";
import { Appearance, Pressable, useColorScheme } from "react-native";
import { Icon } from "../ui/icon";

export default function ThemeToggle() {

    const colorScheme = useColorScheme();

    return (
        <Pressable
            onPress={() => colorScheme == 'light' ? Appearance.setColorScheme('dark') : Appearance.setColorScheme('light')}
        >
            <Icon as={Sun} size="xxl" />
        </Pressable>
    )
}