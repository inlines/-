import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TransferListItem } from 'src/app/models/transfer.model';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.sass']
})
export class TransferHistoryComponent implements OnInit {

  transferListItems: Array<TransferListItem>;
  transferHeaders = [
    '№',
    'Карта плательщика',
    'Карта получателя',
    'Сумма',
    'Дата выполнения',
    'Действие'
  ];

  constructor(
    private localStorage: LocalStorageService,
    private transferData: TransferDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transferListItems = this.localStorage.getTransferRecords();
    this.transferData.currentTransfer = null;
  }

  removeTransfer(transfer: TransferListItem, index: number) {
    this.localStorage.removeTransferRecord(transfer.id);
    this.transferListItems.splice(index, 1);
  }

  repeatTransfer(transfer: TransferListItem) {
    this.transferData.currentTransfer = transfer;
    this.router.navigate(['/create-transfer'])
  }
}
