import { Component } from '@angular/core';
import { Error } from './models/Error';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './html/Error.html'

})


export class ErrorComponent {
    errorObj: Error = new Error();
}
