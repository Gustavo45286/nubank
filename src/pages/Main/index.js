import React from 'react';
import {View,Text} from 'react-native';

import {styles} from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import Icon from '@expo/vector-icons/MaterialIcons';



export default function Main(){
    return(
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Icon name="attach-money" size={28} color="#666"></Icon>
                        <Icon name="visibility-off" size={28} color="#666"></Icon>

                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>Saldo Disponivel</Text>
                        <Text style={styles.description}>R$ 160.684,95</Text>
                    </View>
                    <View style={styles.cardFooter}>
                        <Text style={styles.anottation}>
                            Transfêrencia de R$50,00 recebida de Gustavo Bonifácio hoje as 12:00Hrs
                        </Text>
                    </View>
                </View>
            </View>
            <Tabs></Tabs>
        </View>
    )
}