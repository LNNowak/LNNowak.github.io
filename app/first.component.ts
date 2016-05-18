import { Component } from "@angular/core"

@Component({
    selector: "fs",
    template: "<div><span>put something here: {{thingTitle}}</span></div>"
})
export class FirstComponent{
    public thingTitle: string = "Ukasz";
}