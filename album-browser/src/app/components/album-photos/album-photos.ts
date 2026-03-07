import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
})
export class AlbumPhotosComponent implements OnInit {

  photos: Photo[] = [];
  loading = true;
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('AlbumPhotos constructor');
  }

  ngOnInit(): void {
    console.log('AlbumPhotos ngOnInit');

    const idStr = this.route.snapshot.paramMap.get('id');
    this.albumId = Number(idStr);

    console.log('Photos for album:', this.albumId);

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        console.log('PHOTOS LOADED', data.length);
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('PHOTOS ERROR', err);
        this.loading = false;
      }
    });
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}