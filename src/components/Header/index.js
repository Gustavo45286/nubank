import React from 'react';
import {Container,Top, Title} from './styles';
import {View, Text, Image} from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';
import Logo from '../../../assets/Nubank_Logo.png';


export default function Header(){
    return(
        <Container>
            <Top>
                <Image source={Logo}></Image>
                <Title>Gustavo</Title>
            </Top>

            <Icon name="keyboard-arrow-down" size={20} color="#fff"></Icon>
        </Container>
    );
}