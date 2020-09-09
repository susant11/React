import React from 'react';
import {Card} from '@uifabric/react-cards';
import {Text,initializeIcons} from '@fluentui/react';
import 'office-ui-fabric-react/dist/css/fabric.css';

const container = {
    display:'flex',
    justifyContent:'center',
    margin:'10vh 0'
}
const icon = {
    fontSize:23,
    padding:12,
    verticalAlign:'middle',
    paddingLeft:0,
    color:'Green',
}
const styles = {
    cardStyles:{
        root:{
            backgroundColor:'white',
            padding:20,
            borderTop:'5px solid red',
            width:'90%',
            margin:'auto',
        }
    },
    header:{
        root:{
            fontSize:20,
            fontWeight:'bold',
            color:'red',
        }
    }
}
const cards = [
    {
        title:'current Balance',
        amount:'$21 876',
        icon:'Money',
        percentage:'2.3'
    },
    {
        title:'current Balance',
        amount:'$21 876',
        icon:'PaymentCard',
        percentage:'2.3'
    },
    {
        title:'current Balance',
        amount:'$21 876',
        icon:'Money',
        percentage:'2.3'
    }
]

const CardsSection = () => {
    initializeIcons();
    return(
        <div style={container}>
            {cards.map((card)=>(
                <div className="s-Grid-col ms-sm3 ms-xl3">
                    <Card style={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style = {icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                                <Text style={styles.header}>{card.title}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text>{card.amount}</Text>
                            </Card.Item>
                            <Card.Item>
                                <Text>{card.percentage}%</Text>
                            </Card.Item>
                        </Card.Section>
                    </Card>
                    
                </div>
            ))}
        </div>
    )

}
export default CardsSection;