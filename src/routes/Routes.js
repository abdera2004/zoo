import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/';
import Territorio1 from '../pages/territorio1/'
import Cadastro from '../pages/cadastro/';
import Home from '../pages/home/';
import Perfil from '../pages/perfil/';
import Navegacao from '../components/Navegacao';
import Splash from '../components/Splash';
import Loading from '../components/Loading';

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
            <Stack.Screen
            name="Territorio1"
            component={Territorio1}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Loading"
            component={Loading}
            options={{headerShown: false}}
            />
        </Stack.Navigator>

    );
};

export default Routes;