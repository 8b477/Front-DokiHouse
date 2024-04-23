import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonsaiStateService {

  private isCreateBonsai: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private isUpdateBonsai: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private isDeleteBonsai: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

// CREATE
  getIsCreateBonsai() {
    return this.isCreateBonsai
  }

  setIsCreateBonsai(value: boolean) {
    this.isCreateBonsai.next(value)
  }

// UPDATE
  getIsUpdateBonsai() {
    return this.isUpdateBonsai
  }

  setIsUpdateBonsai(value: boolean) {
    this.isUpdateBonsai.next(value)
  }

// DELETE
  getIsDeleteBonsai() {
    return this.isDeleteBonsai
  }

  setIsDeleteBonsai(value: boolean) {
    this.isDeleteBonsai.next(value)
  }


}
