import {Component} from "@angular/core";
@Component({
selector:"ng-if",
templateUrl:"./ngif.html"
})
export class NgIf{
title="welcome srlnp this is ngif component"
array_one:any[]
array_two:any[]
ngOnInit() {
    this.array_one=["srlnp","subham","sangam"];
    this.array_two=[{"name":"srlnp","city":"berhampur"},
    {"name":"sukumar","city":"puri"},
    {"name":"sanjay","city":"aska"},
    {"name":"sonali","city":"balugaon"},
    {"name":"kumari","city":"aska"},
    {"name":"tunguru","city":"mungrai"},
    ]
}
}