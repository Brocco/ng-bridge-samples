import { ComponentBridge } from 'ng-bridge';
import { IPerson } from './iperson';

@ComponentBridge({
  selector: 'app',
  controllerAs: 'app',
  template: `
    <ul>
      <li ng-repeat="p in app.people">
        <person first-name="p.firstName" last-name="p.lastName"></person>
      </li>
    </ul>
  `
})
export default class App {
  public people: IPerson[];
  constructor(){
    this.people = [
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Jones' },
      { firstName: 'Dave', lastName: 'Smith' },
      { firstName: 'Sarah', lastName: 'Johnson' },
    ];
    console.log('people', this.people);    
  }
}
