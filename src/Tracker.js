import { ColumnRow, ColumnRowBox } from "./FormatBlocks";

function TrackerCell ({lastRow = false, lastCol = false, flexWeight = "", width = ""}) {
  const styles={
    border: "solid"
  };
  if(flexWeight) {
    styles.flex = flexWeight;
  }
  if(width) {
    styles.width = width;
  }
  if(!lastRow) {
    styles.borderBottom = 0;
  }
  if(!lastCol) {
    styles.borderRight = 0;
  }

  return <div style={styles}/>;
}

function TrackerRow({numRounds = 10, lastRow=false, children}) {
  const rounds = Array.from(Array(Number(numRounds)).keys());
  return <div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
      <TrackerCell flexWeight="6" lastRow={lastRow} />
      {rounds.map((item, index, array) => (
        <TrackerCell flexWeight="1" lastRow={lastRow} lastCol={index == (array.length-1) ? true : false}/>
      ))}
    </div>;
}

export function Tracker({flexWeight = "", height = ""}) {

  const creatures = Array.from(Array(20).keys());
  const minis = [1, 2, 3, 4, 5, 6];

  return <ColumnRow flexWeight={flexWeight} height={height}>
    <ColumnRowBox width="60%" skipBox={true} nestColumn={true} padding="0.1in">
      {creatures.map((item, index, array) => (
        <TrackerRow numRounds="10" lastRow={index == (array.length - 1) ? true : false}></TrackerRow>
      ))}
    </ColumnRowBox>
    <ColumnRowBox width="40%" skipBox={true} nestColumn={true}>
      {minis.map(() => (
        <ColumnRow flexWeight="1">
          <ColumnRowBox flexWeight="1"></ColumnRowBox>
          <ColumnRowBox flexWeight="1"></ColumnRowBox>
        </ColumnRow>
      ))}
    </ColumnRowBox>
  </ColumnRow>;
}
