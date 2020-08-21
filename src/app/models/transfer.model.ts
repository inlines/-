export interface CreateTransferPayload {
  senderCardNum: string;
  receiverCardNum: string;
  senderName: string;
  activeTillMonth: number;
  activeTillYear: number;
  amount: number;
}

export interface TransferListItem extends CreateTransferPayload {
  id: string;
  senderCardDisplayName: string;
  receiverCardDisplayName: string;
  date: string;
}