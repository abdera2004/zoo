import {ActivityIndicator, View} from 'react-native';

export default function Loading({mostrar}) {

    return (
        <>
        {mostrar && (
        <View style={{flex: 1, width: '100%', height: '100%', backgroundColor: 'transparent', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', position: 'absolute',}}>
            <ActivityIndicator size="large" color="dodgerblue" animating={mostrar}/>
        </View>
        )}
        </>
    );
    }