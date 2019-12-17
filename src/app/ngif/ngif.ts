import {Component} from "@angular/core";
@Component({
selector:"ng-if",
templateUrl:"./ngif.html"
})
export class NgIf{
title="welcome srlnp this is ngif component"
array_one:any[]
ngOnInit() {
    this.array_one=["srlnp","subham","sangam"]
}
}