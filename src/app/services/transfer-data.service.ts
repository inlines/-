import { Injectable, Inject } from '@angular/core';
import { TransferListItem, CreateTransferPayload } from '../models/transfer.model';


@Injectable()
export class TransferDataService {
  map(inputTransfer: CreateTransferPayload): TransferListItem {
    return ({
      id: Math.round(Math.random() * 1000).toString(),
      date: this.generateDateString(),
      senderCardDisplayName: this.hideCardNumber(inputTransfer.senderCardNum),
      receiverCardDisplayName: this.hideCardNumber(inputTransfer.receiverCardNum),
      ...inputTransfer
    });
  }

  /**
   *  turning 1231231231231231 into  ****23123123****
   */
  hideCardNumber(cardNum: string): string {
    return ('****' + cardNum.slice(4)).slice(0,-4) + '****';
  }

  generateDateString(): string {
    const now = new Date();
    return `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;
  }

  currentTransfer: TransferListItem = null;

  get currentTransferAsPayload(): CreateTransferPayload {
    const res = ({
      ...this.currentTransfer
    });
    delete res.id;
    delete res.date;
    delete res.receiverCardDisplayName;
    delete res.senderCardDisplayName;
    return res;
  }
}