import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "titleCase"
})
export class TitleCasePipe implements PipeTransform {
    private isPreposition(word:string) :boolean {
        const LIST : string[] = [
            "of", "the"
        ];
        return LIST.includes(word);
    };

    private toTitleCase(word: string) :string {
        word = word.slice(0,1).toUpperCase() + word.slice(1)
        return word;
    };

    transform(val : string) {
        if(!val) return "";

        let words : string[],
            titleString : string;

        words = val.toLowerCase().split(/\s/);

        titleString = words.map((word,i) => {
            if( this.isPreposition(word) && i !== 0) {
                return word;
            }else {
                return this.toTitleCase(word);
            }
        }).join(" ");

        return titleString;
    }
}