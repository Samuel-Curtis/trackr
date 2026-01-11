import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Box } from "../ui/box";

import { usePathname, useRouter } from "expo-router";
import { Clock, NotebookText, StickyNote } from "lucide-react-native";
import { Heading } from "../ui/heading";
import { Icon } from "../ui/icon";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";

export default function TrackrDrawer(props: any) {

    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { name: 'Timeline', route: '/(drawer)/timeline', icon: NotebookText  },
        { name: 'Manage Activities', route: '/(drawer)/manage-activities', icon: StickyNote },
        { name: 'History', route: '/(drawer)/history', icon: Clock },
    ];

    return (
        <DrawerContentScrollView {...props}>
            <Box>
                <Heading>
                    <Text>Trackr</Text>
                </Heading>

                {/* Navigation */}
                { menuItems.map((item) => {
                    const isActiveScreen = pathname === item.route;

                    return (
                        <Pressable
                            key={item.route}
                            onPress={() => router.push(item.route as any)}
                        >
                            <Icon as={item.icon as any} />
                            <Text>
                                {item.name}
                            </Text>
                        </Pressable>
                    )
                })}

                {/* Settings Section */}
            </Box>
        </DrawerContentScrollView>
    )
}