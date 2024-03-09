import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const Routes = () =>{
    return(
        
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
        </Stack.Navigator>

    );
};

export default Routes;