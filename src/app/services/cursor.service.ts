import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CursorService {
    hoverState = signal<boolean>(false);

    constructor() { }

    setHover(isHovering: boolean) {
        this.hoverState.set(isHovering);
    }
}
