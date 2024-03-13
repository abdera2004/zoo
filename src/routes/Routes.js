import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Splash from '../components/Splash';

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
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
        </Stack.Navigator>

    );
};

export default Routes;