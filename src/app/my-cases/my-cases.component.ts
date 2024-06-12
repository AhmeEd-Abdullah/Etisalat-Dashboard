import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { Post } from '../data-types';

@Component({
  selector: 'app-my-cases',
  templateUrl: './my-cases.component.html',
  styleUrls: ['./my-cases.component.scss'],
})
export class MyCasesComponent implements OnInit, OnDestroy {
  posts!: Post[];
  currentDate: Date;
  buttonLabels: string[];
  buttonBackgrounds: string[];
  postsSubscribtion!: Subscription;

  constructor(private apiService: ApiService) {
    this.currentDate = new Date();
    this.buttonLabels = ['New', 'Edited', 'New', 'No Change'];
    this.buttonBackgrounds = ['#008000c4', 'orange', '#008000c4', '#808080cf'];
  }

  ngOnInit(): void {
    this.postsSubscribtion = this.apiService.getPosts().subscribe((result) => {
      this.posts = result;
    });
  }

  ngOnDestroy(): void {
    this.postsSubscribtion.unsubscribe();
  }
}
