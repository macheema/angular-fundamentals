import { Component } from '@angular/core';
import { isUndefined } from 'util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'components-example',
    templateUrl: './components-example.component.html',
    styleUrls: ['./components-example.component.css']
})
export class ComponentsExampleComponent {
    public name: string;
    private names: string[] = ['Awais', 'Ali', 'Omer'];

    public color: string;
    private colors: string[] = ['green', 'red', 'blue'];

    public counter = 0;
    constructor() {
        this.interpolation();
        this.proprtybinding();
    }

    interpolation() {
        setInterval(() => {
            if (isUndefined(name)) {
                this.name = this.names[0];
            } else {
                this.name = this.names[(this.names.findIndex(name => name === this.name) + 1) % this.names.length];
            }
        }, 1000);
    }

    proprtybinding() {
        setInterval(() => {
            if (isUndefined(this.color)) {
                this.color = this.colors[0];
            } else {
                this.color = this.colors[(this.colors.findIndex(color => color === this.color) + 1) % this.colors.length];
            }
        }, 1000);
    }
    changeValue(value) {
        this.counter = value;
    }
}
