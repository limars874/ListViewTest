/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView,
    Text,
    TouchableOpacity,
} from 'react-native';

var data = [1000,2000,3000]
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>
{
    if(r1 !== r2){
        console.log('rowHasChanged!')
    }else {console.log('rowHasNotChanged')}
    return r1 !== r2
}});

class ListViewTest extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataSource:ds.cloneWithRows(data),
        };
    }
    changeds(){
        console.log('ds data changing...');
        data[1] =2;
        this.setState(
            {dataSource:ds.cloneWithRows(data)}
        );
    }

    changestateds(){
        console.log('state data changing...');
        data[1] =2;
        this.setState(
            {dataSource:this.state.dataSource.cloneWithRows(data)}
        );
    }
    changestateds2(){
        console.log('state data changing...');
        var data2 = [1,2,3];
        this.setState(
            {dataSource:this.state.dataSource.cloneWithRows(data2)}
        );
    }



    render() {
        console.log('render...')

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,rowID) => <Text>{rowData}</Text>}
                />

                <Text>data is {data[0]} {data[1]} {data[2]}</Text>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.changeds()}>
                    <Text>Change ds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.changestateds()}>
                    <Text>Change state.ds failed </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonstyle,{borderColor:'red'}]} onPress={()=>this.changestateds2()}>
                    <Text>Change state.ds success</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:20,
    },
    buttonstyle:{
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor:'#06c1ae',
        marginBottom: 5,
    },
});


AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
