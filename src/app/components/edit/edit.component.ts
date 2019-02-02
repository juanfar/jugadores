import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  player: any;
  angForm: FormGroup;

  constructor(private _playerService: PlayersService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
                this.createForm();
              }

  createForm() {
    this.angForm = this.fb.group({
      nombre: ['', Validators.required ],
      equipo: ['', Validators.required ],
      precio: ['', Validators.required ]
    });
  }

  updatePlayer(nombre: string, equipo: string, precio: number) {
    this.route.params.subscribe(params => {
      this._playerService.updatePlayer(nombre, equipo, precio, params['id']);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.player = this._playerService.editPlayer(params['id']).subscribe(res => {
        this.player = res;
      });
    });
  }

}
