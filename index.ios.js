/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Dimensions = require('Dimensions');

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView,
    Text,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';


var screenW = Dimensions.get('window').width;

class ListViewTest extends Component {

    constructor(props) {
        super(props);

        var data = {
            Sone: [1001, 1002, 1003, 1004],
            Stwo: [2001, 2002, 2003, 2004],
            Sthree: {up:3001,down:3002,left:3003, right:3004},
            Sfour: {up:4001,down:4002,left:4003, right:4004},
            Sfive: {up:5001,down:5002,left:5003, right:5004}
        };

        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(data)
        };
    }



    renderHeader() {
        return (
            <View style={styles.header}>
                <Text>
                    I am Header
                </Text>
            </View>
        );
    }


    renderFooter() {
        return (
            <View style={styles.footer}>
                <Text>
                    I am Footer
                </Text>
            </View>
        );
    }

    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text>
                    and {sectionID}
                </Text>
            </View>
        );
    }

    renderSeparator(sectionID, rowID, highlightRow){
        return(
            <TouchableHighlight key={sectionID+rowID}  style={styles.separator} underlayColor='#dddddd'>
                <Text>separator[{sectionID}][{rowID}]</Text>
            </TouchableHighlight>

        );

    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row}>
                <Text>data[{sectionID}][{rowID}] is {rowData}</Text>
            </View>

        );
    }



    render() {

        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    style={styles.listview}
                    onChangeVisibleRows={(visibleRows, changedRows) => console.log({visibleRows, changedRows})}
                    renderHeader={this.renderHeader}
                    renderFooter={this.renderFooter}
                    renderSectionHeader={this.renderSectionHeader}
                    renderSeparator={this.renderSeparator}
                    renderRow={this.renderRow}

                    initialListSize={10}
                    pageSize={10}
                    scrollRenderAheadDistance={2000}
                />

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
        marginTop: 20,
    },
    buttonstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#06c1ae',
        marginBottom: 5,
    },
    section:{
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor:'#cdcdcd',
        width:screenW,

    },

    header:{
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor:'#f5e327',
        width:screenW,
        height:44,

    },
    footer:{
        borderColor: 'yellow',
        borderWidth: 1,
        backgroundColor:'#9735a5',
        width:screenW,
        height:44,

    },
    row:{
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor:'#6C92AD',
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        width:screenW,

    },

    separator:{
        borderColor: '#26b8a8',
        borderWidth: 1,
        backgroundColor:'#af30ea',
        height:20,
        justifyContent: 'center',
        alignItems: 'center',
        width:screenW,
    }
});


AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
