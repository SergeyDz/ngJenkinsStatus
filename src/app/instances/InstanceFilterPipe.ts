import { Pipe, PipeTransform } from '@angular/core';  
import { GCINST } from './data_struc';
  
@Pipe({  
    name: 'instancefilter',  
    pure: false  
})  
  
export class InstanceFilterPipe implements PipeTransform {  
    transform(items: GCINST[], filter: string): any {  
        if (!items || !filter) {  
            return items;  
        }  
        return items.filter(item => item.ID == filter);  
    }  
}  