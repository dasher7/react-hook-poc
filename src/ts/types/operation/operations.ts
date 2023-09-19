import { OperationEnum } from "../../enums/operation/operation";

export type Operation<T> = {
      type: OperationEnum;
      uid: string;
      body: T
}