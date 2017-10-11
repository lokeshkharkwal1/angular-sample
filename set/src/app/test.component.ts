import { Component, Input } from '@angular/core';


@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: './html/test.html'
})

export class TestComponent {
    constructor() { }

    placeholderOne: string = "this is placeholder one";
    placeholderTwo: string = "this is placeholder two";

}