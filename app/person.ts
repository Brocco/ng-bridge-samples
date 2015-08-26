import { ComponentBridge as Component, ViewBridge as View } from 'ng-bridge';
import { IPerson } from './iperson';

@Component({
  selector: 'person',
  controllerAs: 'person',
  properties: ['firstName', 'lastName'],
})
@View({
  template: `
    <span>{{person.firstName}} {{person.lastName}}</span>
  `
})
export default class Person {
  public firstName: string;
  public lastName: string;
  constructor(){}
}
