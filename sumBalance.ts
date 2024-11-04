const BillTypeValues = [
  { key: "1000kr", value: 1000 },
  { key: "500kr", value: 500 },
  { key: "200kr", value: 200 },
  { key: "100kr", value: 100 },
  { key: "50kr", value: 50 },
] as const;

type BillType = (typeof BillTypeValues)[number];
type BillTypeDenomination = BillType["key"];

type CashSettlement = Partial<Record<BillTypeDenomination, number>>;

const denomination1: BillTypeDenomination = "100kr";

export function sumBalance(cashSettlement: CashSettlement): number {
  let result = 0;
  for (const { key, value } of BillTypeValues) {
    result += (cashSettlement[key] || 0) * value;
  }
  /*    for (const type of BillTypeValues) {
        if(cashSettlement[type.key]) {
            result += cashSettlement[type.key] * type.value;
        }
    }*/
  return result;
}
