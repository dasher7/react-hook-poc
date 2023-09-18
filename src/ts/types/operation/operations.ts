import { OperationEnum } from "../../enums/operation/operation";

export type Operation = {
      type: OperationEnum;
      uid: string;
      body: unknown
}