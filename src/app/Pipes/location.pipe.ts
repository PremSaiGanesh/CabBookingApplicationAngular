import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(locations: locations[], id:number){
    console.log(id)
    return locations.filter(loc=>loc.id== id)[0]["possibleROutes"]
  }

}
class locations {
  "id":number;
  "from_Location": string;
  "possibleROutes": location[]
}
class location {
  "LId": number;
  "to_Location": string;
  "Distance": number
}
