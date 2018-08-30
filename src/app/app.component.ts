import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

import { MatFormFieldControl } from '@angular/material';

export interface FilesType {
  name: string;
  pictureUrl: string;
}

export interface User {
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  types = new FormControl(null);
  users = new FormControl(null);

  myForm = new FormGroup({
    types: this.types,
    users: this.users
  });

  value = '';

  filesType: FilesType[] = [
    {name: 'Изображения', pictureUrl: ''}, 
    {name: 'Файлы ПДФ', pictureUrl: ''}, 
    {name: 'Текстовые документы', pictureUrl: ''}, 
    {name: 'Таблицы', pictureUrl: ''}, 
    {name: 'Презентации', pictureUrl: ''}, 
    {name: 'Формы', pictureUrl: ''}, 
    {name: 'Аудио', pictureUrl: ''}, 
    {name: 'Видео', pictureUrl: ''} 
  ];

  usersArr: User[] =[
    {name: 'Пользователь1'},
    {name: 'Пользователь2'},
    {name: 'Пользователь3'},
    {name: 'Пользователь4'},
    {name: 'Пользователь5'},
  ];

  reset(form: NgForm, mark, inBasket) {
    form.reset();
    mark.checked = false; 
    inBasket.checked = false;
  };

  search() {
    console.log('I found all!');
  }
 
}
