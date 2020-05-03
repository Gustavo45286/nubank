import React from 'react';
import styles from './styles';
import {View, Text, Image} from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';
import Logo from '../../../assets/Nubank_Logo.png';


export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.logo} source={Logo}></Image>
                <Text style={styles.title}>Gustavo</Text>
            </View>

            <Icon name="keyboard-arrow-down" size={20} color="#fff"></Icon>
        </View>
    );
}