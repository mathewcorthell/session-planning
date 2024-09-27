import { ColumnRow, ColumnRowBox } from "./FormatBlocks";

export function Tracker() {

  const numCreatures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const numRounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numMinis = [1, 2, 3, 4, 5, 6];

  return <>
    <ColumnRow flexWeight="3">
      <ColumnRowBox flexWeight="3" skipBox={true} nestColumn={true}>
        {numCreatures.map(() => (
          <div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "6", border: "solid", borderRight: "0", borderBottom: "0" }}></div>
            {numRounds.map(() => (
              <div style={{ flex: "1", border: "solid", borderRight: "0", borderBottom: "0" }}></div>
            ))}
          </div>
        ))}
      </ColumnRowBox>
      <ColumnRowBox flexWeight="2" skipBox={true} nestColumn={true}>
        {numMinis.map(() => (
          <ColumnRow flexWeight="1">
            <ColumnRowBox flexWeight="1"></ColumnRowBox>
            <ColumnRowBox flexWeight="1"></ColumnRowBox>
          </ColumnRow>
        ))}
      </ColumnRowBox>
    </ColumnRow>
    <ColumnRow flexWeight="2">
      <ColumnRowBox flexWeight="1"></ColumnRowBox>
    </ColumnRow>
  </>;
}
