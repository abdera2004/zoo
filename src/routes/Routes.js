import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Splash from '../components/Splash';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';

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
            name="Cadastro"
            component={Cadastro}
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
        </Stack.Navigator>

    );
};

export default Routes;