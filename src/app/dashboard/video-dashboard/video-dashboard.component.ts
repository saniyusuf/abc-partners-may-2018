import { Component, OnInit } from '@angular/core';
import {Video} from '../api.types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  public selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onVideoSelected(video){
    this.selectedVideo = video;
  }

}
