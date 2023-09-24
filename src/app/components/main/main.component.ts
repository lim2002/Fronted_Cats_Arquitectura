import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }

  public async logout() {
    await this.keycloakService.logout('http://localhost:4200');
}

}
