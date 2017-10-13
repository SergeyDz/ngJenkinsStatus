import { Pipe } from '@angular/core';  
import { GCINST } from './data_struc';

@Pipe({
  name: "sort"
})
export class InstanceSortPipe {
  transform(array: Array<GCINST>, args: string): Array<GCINST> {
    array.sort((a: GCINST, b: GCINST) => {
      let x: number = 0;
      let y: number = 0;

      if(a.ID.includes('dev') && a.ID != "dev")
      {
        x = parseInt(a.ID.replace("dev", ""));
      }

      if(b.ID.includes('dev') && b.ID != "dev")
      {
        y = parseInt(b.ID.replace("dev", ""));
      }

     if (x < y)  {
        return -1;
      } else if (x > y) {
        return 1;
      } else {
        return 0;
      }
    });

    return array;
  }
}