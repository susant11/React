import React from 'react';
import {DetailsList} from '@fluentui/react';
import {mergeStyleSets} from 'office-ui-fabric-react/lib/Styling';
import 'office-ui-fabric-react/dist/css/fabric.css';

const container = {
    display:'flex',
    justifyContent:'center',
    margin:'10vh 0'
}

const operations=[
    {
        from:'5757 5123 5422',
        to:'0000 0688 5757 5123 5422',
        amount:'$123',
        date:'09-09-2020'
    },
    {
        from:'0000 0688 5757 5123 5422',
        to:'0000 0688 5757 5123 5422',
        amount:'$123',
        date:'09-09-2020'
    },
    {
        from:'0000 0688 5757 5123 5422',
        to:'0000 0688 5757 5123 5422',
        amount:'$123',
        date:'09-09-2020'
    },
    {
        from:'0000 0688 5757 5123 5422',
        to:'0000 0688 5757 5123 5422',
        amount:'$123',
        date:'09-09-2020'
    }
]

const columns = [
    {key:'column1',name:'From',fieldName:'from',minWidth:100,maxWidth:300,isResizable:true},
    {key:'column2',name:'To',fieldName:'to',minWidth:100,maxWidth:300,isResizable:true},
    {key:'column3',name:'Amount',fieldName:'amount',minWidth:100,maxWidth:300,isResizable:true},
    {key:'column4',name:'Date',fieldName:'date',minWidth:100,maxWidth:300,isResizable:true},
]

const className = mergeStyleSets({
table:{
    margin:'auto',
}
});;
const OperationsTable = () =>{
    return(
        <div data-is-scrollable={true} style ={container}>
            <div className={'s-Grid-col ms-sm9 ms-xl9 ${className.table}'}>
                <DetailsList
                items={operations}
                columns={columns}
                selectionMode={0}
                />
            </div>

        </div>
    )
}

export default OperationsTable;