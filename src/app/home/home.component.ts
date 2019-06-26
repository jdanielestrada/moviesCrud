import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MoviesService, private httpClient: HttpClientModule) {

  }

  ngOnInit() {
  }

}
