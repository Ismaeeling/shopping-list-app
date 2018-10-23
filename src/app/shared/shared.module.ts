import { NgModule } from "@angular/core";
import { DropDownDirectiveDirective } from "./drop-down-directive.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        DropDownDirectiveDirective
    ],
    exports:[
        CommonModule,
        DropDownDirectiveDirective
    ]
})
export class SharedModule{}