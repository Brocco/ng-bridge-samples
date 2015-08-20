import { registerComponent } from 'ng-bridge';
import App from './app';
import Person from './person';

angular.module('sampleApp', []);
registerComponent(App, angular.module('sampleApp'));
registerComponent(Person, angular.module('sampleApp'));
