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
} from 'react-native';


var screenW = Dimensions.get('window').width;

class ListViewTest extends Component {

    constructor(props) {
        super(props);

        var data = {Sone: [1001, 1002, 1003, 1004], Stwo: [2001, 2002, 2003, 2004], Sthree: [3001, 3002, 3003, 3004]};
        var ds = new ListView.DataSource({
            getSectionHeaderData:this.getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource: ds.cloneWithRowsAndSections(data, null, null)
        };
    }


    getSectionData(dataBlob, sectionID ){
                return sectionID;
    }



    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.section}>
                <Text>
                    {sectionData}
                </Text>
            </View>
        );
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

    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row}>
                <Text>{rowID} is {rowData}</Text>
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
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        width:screenW,

    }
});


AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
