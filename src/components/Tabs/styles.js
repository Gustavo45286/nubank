import styled from 'styled-components';



export const Container = styled.View`
    height: 100px;
    margin-top: 10px;

`;

export const TabsContainer = styled.ScrollView`
    padding-left: 10px;
    padding-right: 20px;

`;



export const TabItem = styled.View`
    width: 100px;
    height: 100px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 10px;
    justify-content: space-between;

`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #fff;

`;