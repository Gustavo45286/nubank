import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #8B10AE;

`;

export const Content = styled.View`
    flex: 1;
    max-height: 390px;
    justify-content: center;


`;

export const Card = styled.View`
    flex: 1;
    background-color: #FFF;
    border-radius: 4px;
    margin-horizontal: 20px;
    margin-vertical: 0px;

`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

`;

export const CardContent = styled.View`
    
    flex: 1;
    padding-vertical:0px;
    padding-horizontal: 30px;
    justify-content: center;
`;
export const CardFooter = styled.View`
    padding: 30px;
    background-color: #eee;
    border-radius: 4px;

`;

export const Title = styled.Text`
    font-size: 13px;
    color: #999;
`;

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;

`;

export const Anottation = styled.Text`
    font-size: 13px;
    color: #333;
`;
