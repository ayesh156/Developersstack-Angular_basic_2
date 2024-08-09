import { Component, Input } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.html'],
})
export class HeaderComponent{
    @Input() receiveMessage:string='';
}