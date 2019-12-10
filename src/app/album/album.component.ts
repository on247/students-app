import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from './album.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumId:number;
  album=null;

  constructor(
    private activatedRoute:ActivatedRoute,
    private albumService:AlbumService
  ) {
    this.activatedRoute.params.subscribe(params => {
      // this.getStudentDetails(params.studentId);
      this.albumId = params.albumId;
    });

    console.log('Construct');
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumId).then(response => {
      this.album = response;
    });
  }

  ngOnInit() {
    this.getAlbum();
  }

}
