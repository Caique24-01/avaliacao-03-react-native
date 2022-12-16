import { Text, View } from "react-native";
import Listas from "../components/Listas";

export default function Home() {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Listas />
        </View>
    );
}