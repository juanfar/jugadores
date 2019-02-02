import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersService } from '../../services/player.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm: FormGroup;

  constructor(private _playerService: PlayersService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      nombre: ['', Validators.required ],
      equipo: ['', Validators.required ],
      precio: ['', Validators.required ]
   });
  }

  addPlayer(nombre: string, equipo: string, precio: number) {
    this._playerService.addPlayer(nombre, equipo, precio);
    this.angForm.reset();
  }

}
