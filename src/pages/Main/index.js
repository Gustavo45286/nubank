import React from 'react';

import {Container, Content,Card,CardHeader,CardContent,CardFooter,Title,Description,Anottation} from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import Icon from '@expo/vector-icons/MaterialIcons';



export default function Main(){
    return(
        <Container>
            <Header></Header>
            <Content>
                <Card>
                    

                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666"></Icon>
                        <Icon name="visibility-off" size={28} color="#666"></Icon>

                    </CardHeader>
                    <CardContent>
                        <Title>Saldo Disponivel</Title>
                        <Description>R$ 160.684,95</Description>
                    </CardContent>
                    <CardFooter>
                        <Anottation>
                            Transfêrencia de R$50,00 recebida de Gustavo Bonifácio hoje as 12:00Hrs
                        </Anottation>
                    </CardFooter>
                </Card>
            </Content>
            <Tabs></Tabs>
        </Container>
    )
}