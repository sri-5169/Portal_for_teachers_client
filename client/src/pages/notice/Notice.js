import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const Notice = () => {
 const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
    editable: true,
  });

  return (
      <div style={{height: 300, width: '80%', marginLeft:'auto'}}>
      <DataGrid
        onCellDoubleClick={(params, event) => {
          if (!event.ctrlKey) {
            event.defaultMuiPrevented = true;
          }
        }}
        {...data}
      />
    </div>
  );
}

export default Notice