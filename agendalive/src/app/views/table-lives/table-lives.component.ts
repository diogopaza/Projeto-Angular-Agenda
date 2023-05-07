import { Component } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-table-lives',
  templateUrl: './table-lives.component.html',
  styleUrls: ['./table-lives.component.css']
})

export class TableLivesComponent { 
  lives: Live[] = [];
  constructor(private liveService: LiveService){
    /*liveService.getLivesWithFlag().subscribe( lives =>{
      this.lives = lives;          
    })*/
    
  }

  ngOnInit(): void {
    this.liveService.getLivesWithFlagTeste().subscribe( lives =>{
      this.lives = lives;          
    })
   
  }

  displayedColumns: string[] = ['live-name','live-link','registration-date','channel-name'];
  dataSource = this.lives;
}
