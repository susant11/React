import React from 'react';
import {Nav,initializeIcons} from '@fluentui/react';

const links = [
    {
        links:[
            {
                name:'Home',
                url:'/',
                key: 'key1',
                iconProps:{
                    iconName:'News',
                    style :{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }

                }
            },
            {
                name:'About',
                url:'/',
                key: 'key2',
                iconProps:{
                    iconName:'PlayerSettings',
                    style :{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }

                }
            },
            {
                name:'Contact',
                url:'/',
                key: 'key3',
                iconProps:{
                    iconName:'SwitcherStartEnd',
                    style :{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }

                }
            },
            {
                name:'Dashboard',
                url:'/',
                key: 'key4',
                iconProps:{
                    iconName:'News',
                    style :{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        }
                    }

                }
            }

        ]
    }
]

const navigationStyles = {
    root:{
        height:'100vh',
        boxSizing:'border-box',
        border:'1px solid #eee',
        overflowY:'auto',
        paddingTop:'10vh'
    }
}
const Navigation = () => {
    initializeIcons();
    return (
        <Nav
        groups={links}
        selectedKey="key1"
        styles={navigationStyles}
        />
    )

}

export default Navigation;