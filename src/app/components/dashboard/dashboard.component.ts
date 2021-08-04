import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  loading = false;
  query = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) {}

  ngOnInit(): void {}

  obtenerClima() {
    this.loading = true;
    this.query = false;
    this._climaService.getClima(this.ciudad).subscribe(
      (data) => {
        this.loading = false;
        this.query = true;
        this.temperatura = data.main.temp;
        this.humedad = data.main.humidity;
        this.clima = `${data.weather[0].main} -> ${data.weather[0].description}`;
      },
      (error) => {
        this.loading = false;
        this.error();
      }
    );
  }

  error() {
    this.mostrarError = true;

    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
