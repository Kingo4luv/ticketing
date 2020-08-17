import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@keatickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
