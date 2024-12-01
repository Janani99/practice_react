import React from 'react';
import { List } from 'react-virtualized';


export default function Virtualized() {
  const arrayList = Array.from({ length: 1000 }, (_, i) => i);
  console.log("hhh", arrayList);
  const rowRenderer = ({ index, key, style }) => {
   console.log('index',index);
   return(
    <div key={key} style={style}>
      <p>{index}</p>
    </div>
   )
}
  return (
    <div className='App'>
      <div className='list'>
        <List
          width={700}
          height={400}
          rowHeight={50}
          rowCount={arrayList.length}
          overscanRowCount={3}
          rowRenderer={rowRenderer}
        />


      </div>

    </div>
  )
}
