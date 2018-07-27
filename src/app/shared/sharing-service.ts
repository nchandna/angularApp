import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class SharingService {

    private evaId = new BehaviorSubject(0);
    EVAId = this.evaId.asObservable();

    constructor() { }

    updateEvaId(id: number) {
        this.evaId.next(id)
    }

}
