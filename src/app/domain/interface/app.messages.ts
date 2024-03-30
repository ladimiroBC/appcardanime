export interface ApplicationMessages {
  showMessagesSuccessfull(message: string, title: string): void;
  showMessagesError(message: string, title: string): void;
}
