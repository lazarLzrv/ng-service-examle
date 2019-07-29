import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
    users: string[];
    counterAtive:number;

    constructor(private userService:UsersService,
               private counterService:CounterService){}
                
    ngOnInit(){
        this.users=this.userService.activeUsers 
    }    
    onSetToInactive(id: number) {
        this.userService.onSetToInactive(id);
        this.counterAtive=this.counterService.counterActive
    }


}
