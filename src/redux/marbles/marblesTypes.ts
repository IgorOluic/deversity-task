export interface MarbleBox {
  id: number;
  count: number;
}

export type MarbleBoxData = Record<number, MarbleBox>;

export interface MarblesState {
  marbleBoxIds: MarbleBox["id"][];
  marbleBoxData: MarbleBoxData;
  totalMarbleBoxCount: number;
  totalMarblesCount: number;
}
