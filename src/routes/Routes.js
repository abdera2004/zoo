import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Splash from '../components/Splash';
import User from '../pages/User';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Navegacao from '../components/Navegacao';

const Stack = createNativeStackNavigator();

const Routes = () =>{
    return(
        
        <Stack.Navigator>
            <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="User"
            component={User}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Navegacao"
            component={Navegacao}
            options={{headerShown: false}}
            />
        </Stack.Navigator>

    );
};

export default Routes;