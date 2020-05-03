import React from 'react';
import styles from './styles';
import {View, Text, ScrollView} from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';

export default function Tabs(){
    return(
        <View style={styles.container}>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsContainer}
            >
                <View style={styles.tabItem}>
                    <Icon name="person-add" size={24} color="#fff"></Icon>
                    <Text style={styles.tabText}>Indicar Amigos</Text>
                </View>

                <View style={styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color="#fff"></Icon>
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>

                <View style={styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color="#fff"></Icon>
                    <Text style={styles.tabText}>Depositar</Text>
                </View>

                <View style={styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color="#fff"></Icon>
                    <Text style={styles.tabText}>Transferir</Text>
                </View>

                <View style={styles.tabItem}>
                    <Icon name="lock" size={24} color="#fff"></Icon>
                    <Text style={styles.tabText}>Bloquear Cartão</Text>
                </View>


            </ScrollView>
        </View>
    );
    
}