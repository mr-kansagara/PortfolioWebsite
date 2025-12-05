import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = signal<boolean>(true);

  setLoading(loading: boolean) {
    this.isLoading.set(loading);
  }
}
