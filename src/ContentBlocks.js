import { ColumnRow, 
    ColumnRowBox, 
    InsetRow, 
    InsetRowBackground, 
    InsetRowInset 
} from "./FormatBlocks";
import ReactMarkdown from "react-markdown";

export function Characters({flexWeight = "", height = "", characters}) {

    const three = [1,2,3];
    return <>
      {three.map(() => (
        <ColumnRow flexWeight="1">
          <ColumnRowBox flexWeight="1"/>
          <ColumnRowBox flexWeight="1"/>
        </ColumnRow>
      ))}
    </>;
  }

export function StrongStartAndDate ({flexWeight = "", height = "", strongstart, date}) {
    return <InsetRow flexWeight={flexWeight} height={height}>
        <InsetRowBackground id="strongstart">
            <h1 className="boxlabel">Strong Start</h1>
            <ReactMarkdown>{strongstart}</ReactMarkdown>
        </InsetRowBackground>
        <InsetRowInset id="date" width="2.5in" height="0.5in">
            <h1 className="boxlabel">Date</h1>  
            <ReactMarkdown>{date}</ReactMarkdown>          
        </InsetRowInset>
      </InsetRow>;
  }
  
export function PotentialScenes({flexWeight = "", height = "", potentialscenes}) {
    return <ColumnRow flexWeight={flexWeight} height={height}>
        <ColumnRowBox id="potentialscenes" flexWeight="1">
          <h1 className="boxlabel">Potential Scenes</h1>
          <ReactMarkdown className="two-columns">{potentialscenes}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
    
export function SecretsAndClues({flexWeight = "", height = "", secretsandclues}) {
    return <ColumnRow flexWeight={flexWeight} height={height}>
        <ColumnRowBox id="secretsandclues">
          <h1 className="boxlabel">Secrets and Clues</h1>
          <ReactMarkdown>{secretsandclues}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
  
export function FantasticLocations({flexWeight = "", height = "", fantasticLocations}) {
    return <ColumnRow flexWeight={flexWeight} height={height}>
        <ColumnRowBox id="locations">
          <h1 className="boxlabel">Fantastic Locations</h1>
          <ReactMarkdown className="two-columns">{fantasticLocations}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
  
  export function NpcsAndTreasure({flexWeight = "", height = "", npcsandorgs, treasure}) {
    return <ColumnRow flexWeight={flexWeight} height={height}>
        <ColumnRowBox id="npcs" width="50%">
          <h1 className="boxlabel">NPCs & Orgs</h1>
          <ReactMarkdown>{npcsandorgs}</ReactMarkdown>
        </ColumnRowBox>
        <ColumnRowBox id="treasure" width="50%">
          <h1 className="boxlabel">Treasure</h1>
          <ReactMarkdown>{treasure}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }

  export function Monsters({flexWeight = "", height = "", monsters}) {
    return <ColumnRow flexWeight={flexWeight} height={height}>
      <ColumnRowBox id="monsters">
        <h1 className="boxlabel">Monsters</h1>
        <ReactMarkdown className="two-columns">{monsters}</ReactMarkdown>
      </ColumnRowBox>
    </ColumnRow>
  }
  
  export function Notes({flexWeight = "", height = ""}) {
    return <ColumnRow flexWeight={flexWeight} height={height}>
        <ColumnRowBox flexWeight="1">
            <h1 className="boxlabel">Notes</h1>
        </ColumnRowBox>
    </ColumnRow>;
  }
  