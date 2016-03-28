/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    View,
    ListView,
} from 'react-native';



class ListView extends Component {

    constructor(props){
        super(props);
    }


    render() {

        return (
            <Navigator
                initialRoute={{component: Firstpage}}
                configureScene={(route)=> {
                return route.scene || Navigator.SceneConfigs.FadeAndroid;
            }}
                renderScene={(route, navigator)=> {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>

            }} />
        );
    }
}
;


AppRegistry.registerComponent('ListView', () => ListView);
