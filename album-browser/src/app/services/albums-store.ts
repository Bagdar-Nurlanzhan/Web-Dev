import { Injectable } from '@angular/core';
import { Album } from '../models/album';

const KEY = 'albums_cache_v1';

@Injectable({ providedIn: 'root' })
export class AlbumsStore {
  load(): Album[] | null {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      return JSON.parse(raw) as Album[];
    } catch {
      return null;
    }
  }

  save(albums: Album[]): void {
    localStorage.setItem(KEY, JSON.stringify(albums));
  }

  clear(): void {
    localStorage.removeItem(KEY);
  }

  upsert(updated: Album): void {
    const current = this.load() ?? [];
    const idx = current.findIndex(a => a.id === updated.id);
    if (idx >= 0) current[idx] = updated;
    else current.unshift(updated);
    this.save(current);
  }

  remove(id: number): void {
    const current = this.load() ?? [];
    this.save(current.filter(a => a.id !== id));
  }
}