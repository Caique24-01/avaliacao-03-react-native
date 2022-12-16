import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemEdit from "../components/ItemEdit";
import ItemForm from "../components/ItemForm";
import Itens from "../components/Itens";
import ListaEdit from "../components/ListaEdit";
import Home from '../screens/Home'

const Stack = createNativeStackNavigator();

export default function ListaRotas() {
    return (
        <Stack.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor: '#292b2c',
                  },
                  headerTintColor: '#f0ad4e',
                  headerTitleAlign: "center"
            }
        }>
            <Stack.Screen name="Listas" component={Home} />
            <Stack.Screen name="Editar Lista" component={ListaEdit} />
            <Stack.Screen name="Itens" component={Itens} />
            <Stack.Screen name="Editar Item" component={ItemEdit} />
            <Stack.Screen name="Novo Item" component={ItemForm} />
        </Stack.Navigator>
    )
}