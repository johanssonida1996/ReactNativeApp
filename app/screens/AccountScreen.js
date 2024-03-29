import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import { ListItem, ListItemSeparator } from "../components/lists";
import Icon from '../components/Icon';
import colors from '../config/colors';
import routes from "../navigation/routes";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES,
    }
]

function AccountScreen({ navigation }) {
    return (
       <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title="Ida Johansson"
                subTitle="ida.johansson@gmail.com"
                image={require('../assets/ida.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={menuitem => menuitem.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({ item }) => <ListItem 
                title={item.title}
                IconComponent={
                    <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
                    />
                } 
                onPress={() => navigation.navigate(item.targetScreen)}
                /> }
                
                />
            </View>
            <ListItem
             title="Log Out"
             IconComponent={
                <Icon name="logout" backgroundColor='#ffe66d' />
             }
             />
       </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;