import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumsStore } from '../../services/albums-store';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];
  loading = true;
  errorMsg = '';

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private store: AlbumsStore
  ) {
    console.log('AlbumsComponent constructor');
  }

  ngOnInit(): void {
    console.log('AlbumsComponent ngOnInit');
    this.loadAlbums();
  }
  
  reset(): void {
  this.store.clear();
  this.loadAlbums();
}

  loadAlbums(): void {
  this.loading = true;
  this.errorMsg = '';

  const cached = this.store.load();
  if (cached && cached.length > 0) {
    this.albums = cached;
    this.loading = false;
    return;
  }

  this.albumService.getAlbums().subscribe({
    next: (data) => {
      this.albums = data;
      this.store.save(data);        // ✅ сохранили
      this.loading = false;
    },
    error: (err) => {
      console.error(err);
      this.errorMsg = 'Failed to load albums. Click Reload.';
      this.loading = false;
    }
  });
}

  openAlbum(id: number) {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number) {
  const prev = this.albums;
  this.albums = this.albums.filter(a => a.id !== id);
  this.store.remove(id); // ✅ сохранили

  this.albumService.deleteAlbum(id).subscribe({
    error: (err) => {
      console.error(err);
      this.albums = prev;
      this.store.save(prev); // откат
    }
  });
}
}