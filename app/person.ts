import { ComponentBridge } from 'ng-bridge';
import { IPerson } from './iperson';

@ComponentBridge({
  selector: 'person',
  controllerAs: 'person',
  properties: ['firstName', 'lastName'],
  template: `
    <span>{{person.firstName}} {{person.lastName}}</span>
  `
})
export default class Person {
  public firstName: string;
  public lastName: string;
  constructor(){}
}
