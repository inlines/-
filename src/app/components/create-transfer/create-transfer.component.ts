import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateTransferPayload } from '../../models/transfer.model'
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.sass']
})
export class CreateTransferComponent implements OnInit {

  form: FormGroup;

  formControls: {[K in keyof CreateTransferPayload]: K} = {
    senderCardNum: 'senderCardNum',
    receiverCardNum: 'receiverCardNum',
    senderName: 'senderName',
    activeTillMonth: 'activeTillMonth',
    activeTillYear: 'activeTillYear',
    amount: 'amount'
  };

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
    private transferMapper: TransferDataService,
    private transferData: TransferDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.restoreFormValue();
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  initForm() {
    this.form = this.fb.group({
      [this.formControls.senderCardNum]: [null,Validators.required,],
      [this.formControls.receiverCardNum]: [null,Validators.required],
      [this.formControls.senderName]: [null,Validators.required],
      [this.formControls.activeTillMonth]: [null],
      [this.formControls.activeTillYear]: [null],
      [this.formControls.amount]: [null,Validators.required],
    });
  }

  restoreFormValue() {
    if(this.transferData.currentTransfer) {
      this.form.setValue(this.transferData.currentTransferAsPayload);
    }
  }

  submitHandler() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.localStorage.addTransferRecord(
        this.transferMapper.map(this.form.value)
      );
      this.router.navigate(['/transfer-history'])
    }
  }
}
