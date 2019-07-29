import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
    users: string[]; 
    counterInactive:number;

    constructor(private userService:UsersService,
        private counterService:CounterService){}
                
  
    ngOnInit(){ 
        this.users=this.userService.inactiveUsers
    } 
    onSetToActive(id: number) {
        this.userService.onSetToActive(id);
        this.counterInactive=this.counterService.counterInactive
    }
}
