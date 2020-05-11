import React from 'react';
import {Container,TabsContainer,TabItem,TabText} from './styles';


import Icon from '@expo/vector-icons/MaterialIcons';

export default function Tabs(){
    return(
        <Container>
            <TabsContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            
            >
                <TabItem>
                    <Icon name="person-add" size={24} color="#fff"></Icon>
                    <TabText>Indicar Amigos</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#fff"></Icon>
                    <TabText>Cobrar</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#fff"></Icon>
                    <TabText>Depositar</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#fff"></Icon>
                    <TabText>Transferir</TabText>
                </TabItem>

                <TabItem>
                    <Icon name="lock" size={24} color="#fff"></Icon>
                    <TabText>Bloquear Cartão</TabText>
                </TabItem>


            </TabsContainer>
        </Container>
    );
    
}