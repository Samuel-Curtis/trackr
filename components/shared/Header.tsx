
import { Box } from '@/components/ui/box';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { Menu } from 'lucide-react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '../ui/icon';

export default function Header() {

    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    // TODO - Proper Impl with Date param and formatting
    const formattedDate = (): string => {
        return 'Sat, January 10th';
    }

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer())
    }

    return (
        <SafeAreaView> 
        <Box
            style={{
                paddingTop: insets.top, // Safe area for status bar/notch
                paddingBottom: insets.top,
                paddingHorizontal: 16,
                backgroundColor: '#ffffff',
                borderBottomWidth: 1,
                borderBottomColor: '#e5e7eb',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 3,
                elevation: 3, // Android shadow
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            <Pressable 
                onPress={openDrawer}
                accessibilityLabel='Open navigation menu'
                accessibilityRole='button'
                style={{
                    padding: 8,
                    margin: -8
                }}
            >
                <Icon as={Menu} size='xl' />
            </Pressable>

            <Text>
                { formattedDate() }
            </Text>

            {/* Empty box for flex display */}
            <Box /> 
        </Box>

        </SafeAreaView>
    );
}