import { ColumnRow, 
    ColumnRowBox, 
    InsetRow, 
    InsetRowBackground, 
    InsetRowInset 
} from "./FormatBlocks";
import ReactMarkdown from "react-markdown";

export function Characters({flexWeight, characters}) {

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

export function StrongStartAndDate ({flexWeight, strongstart, date}) {
    return <InsetRow flexWeight={flexWeight}>
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
  
export function PotentialScenes({potentialscenes}) {
    return <ColumnRow flexWeight="3">
        <ColumnRowBox id="potentialscenes" flexWeight="1">
          <h1 className="boxlabel">Potential Scenes</h1>
          <ReactMarkdown className="two-columns">{potentialscenes}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
    
export function SecretsAndClues({flexWeight, secretsandclues}) {
    return <ColumnRow flexWeight={flexWeight}>
        <ColumnRowBox id="secretsandclues">
          <h1 className="boxlabel">Secrets and Clues</h1>
          <ReactMarkdown>{secretsandclues}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
  
export function FantasticLocations({flexWeight, fantasticLocations}) {
    return <ColumnRow flexWeight={flexWeight}>
        <ColumnRowBox id="locations">
          <h1 className="boxlabel">Fantastic Locations</h1>
          <ReactMarkdown className="two-columns">{fantasticLocations}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
  
export function NpcsAndMonsters({flexWeight, npcsandorgs, monsters}) {
    return <ColumnRow flexWeight={flexWeight}>
        <ColumnRowBox id="npcs">
          <h1 className="boxlabel">NPCs & Orgs</h1>
          <ReactMarkdown>{npcsandorgs}</ReactMarkdown>
        </ColumnRowBox>
        <ColumnRowBox id="monsters">
          <h1 className="boxlabel">Monsters</h1>
          <ReactMarkdown>{monsters}</ReactMarkdown>
        </ColumnRowBox>
      </ColumnRow>;
  }
  
export function NotesAndTreasure({flexWeight, treasure}) {
    return <InsetRow flexWeight={flexWeight}>
        <InsetRowBackground id="notes">
            <h1 className="boxlabel">Notes</h1>
        </InsetRowBackground>
        <InsetRowInset id="treasure" width="4.25in" height="2in">
            <h1 className="boxlabel">Treasure</h1>
            <ReactMarkdown>{treasure}</ReactMarkdown>  
        </InsetRowInset>
      </InsetRow>;
  }
  
  