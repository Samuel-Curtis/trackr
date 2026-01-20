import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Menu } from "lucide-react-native";
import { Pressable } from "react-native";
import { Icon } from "../ui/icon";

export default function DrawerMenuButton() {

    const navigation = useNavigation();
    
    return (
        <Pressable 
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                accessibilityLabel='Open navigation menu'
                accessibilityRole='button'
                className="pl-4"
            >
                <Icon className="text-neutral-900" as={Menu} size='xxl' />
        </Pressable>
    )
}

