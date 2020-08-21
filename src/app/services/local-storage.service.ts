import { Injectable, Inject } from '@angular/core';
import { STORAGE } from '../tokens/localstorage.token';
import { TransferListItem } from '../models/transfer.model';
import { LocalStorageKey } from '../tokens/localstorage-key.token';


@Injectable()
export class LocalStorageService {
  constructor(
    @Inject(STORAGE) public storage: Storage,
    @Inject(LocalStorageKey) private storageKey: string,
  ) {}

  set(key: string, data: any): void {
    this.storage.setItem(key, JSON.stringify(data));
  }

  get(key: string): any {
    return JSON.parse(this.storage.getItem(key));
  }

  remove(key: string): void {
    this.storage.removeItem(key);
  }

  addTransferRecord(newTransfer: TransferListItem): void {
    const rawTransfers = this.storage[this.storageKey];
    let existingTransfers = rawTransfers ? JSON.parse(rawTransfers) : [];
    if(!existingTransfers || !Array.isArray(existingTransfers)) {
      existingTransfers = [];
    }
    existingTransfers.push(newTransfer);
    this.storage.setItem(this.storageKey, JSON.stringify(existingTransfers));
  }

  getTransferRecords(): Array<TransferListItem> {
    return this.get(this.storageKey);
  }

  removeTransferRecord(id: string) {
    let currentRecords = this.getTransferRecords();
    if (currentRecords) {
      const index = currentRecords.findIndex(rec => rec.id === id);
      currentRecords.splice(index, 1);
      this.storage.setItem(this.storageKey, JSON.stringify(currentRecords));
    }
  }
}