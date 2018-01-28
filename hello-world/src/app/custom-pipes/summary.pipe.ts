import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "summary"
})

export class SummaryPipe implements PipeTransform {
    transform(val : string, ...args: any[] ) {
        if( !val) return false;
        
        let maxOfChars: number;
        let stringClosuse : string;

        if(!args[0]) {
            maxOfChars = 20;
        } 
        else if (args[0] >= 100) {
            maxOfChars = 100;
        }
        else maxOfChars = args[0];

        return val.substring(0,maxOfChars) + "...";
    }
}