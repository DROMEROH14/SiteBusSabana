import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://www.busssabana.somee.com/api/User/all') // Asegúrate que esta URL sea correcta
      .subscribe((data: any) => {
        console.log('Datos de usuarios:', data);
        this.users = data;
      }, error => {
        console.error('Error al obtener usuarios:', error);
      });
  }
}