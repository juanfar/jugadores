import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/player.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  players: any;

  constructor(private http: HttpClient,
              private _playerService: PlayersService,
              private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this._playerService.getPlayers().subscribe(res => {
      this.players = res;
    });
  }

  deletePlayer(id) {
    this._playerService.deletePlayer(id).subscribe(res => {
      console.log('Eliminado');
      this.router.navigateByUrl('index');
    });
  }

}
