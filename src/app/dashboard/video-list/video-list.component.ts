import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Video} from '../api.types';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videoList: Video[];
  selectedVideoID;
  @Output() selectVideo = new EventEmitter<Video>();

  constructor(http: HttpClient) {
    http
      .get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(videoData => this.videoList = videoData);
  }

  ngOnInit() {
  }

  setSelectedVideo(videoID) {
    this.selectedVideoID = videoID;
    const selectedVideo = this.videoList.find((video)=>{
      return video.id === videoID;
    });

    this.selectVideo.emit(selectedVideo);
  }
}
