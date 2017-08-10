import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Repository } from './repository';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {
  repositories: Repository[] = [];

  constructor(private repositoryService: RepositoryService) {
  }

  getRepositories(): void {
    this.repositoryService
      .getRepositories()
      .then(results => this.repositories = results);
  }

  ngOnInit() {
    this.getRepositories();
  }

}
