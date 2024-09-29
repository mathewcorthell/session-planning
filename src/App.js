import './App.css';
import {useState} from "react";
import {Page, 
  InsetRow, 
  InsetRowBackground, 
  InsetRowInset} from "./FormatBlocks.js";
import {Characters,
  StrongStartAndDate,
  PotentialScenes,
  SecretsAndClues,
  FantasticLocations,
  NpcsAndTreasure,
  NotesAndTreasure,
  Notes,
  Monsters
} from "./ContentBlocks.js";
import { Tracker } from './Tracker.js';
import { ParseSessionNotes } from './Parser.js';



function FilePickerForm({setShowNotes, setSessionNotes}) {
  
  const handleSubmit = (event) => {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      const fileContents = event.target.result;
      console.log(fileContents);
      setShowNotes(true);
      setSessionNotes(fileContents);
    }
    reader.readAsText(file);
  }

  return <div id="filepicker">
    <form>
      <input type="file" onChange={handleSubmit}></input>
      <input type="button" value="Choose" />
    </form>
  </div>;
}
function Pages({sessionNotes}) {
  const notesSections = ParseSessionNotes(sessionNotes);

  return <div id="pages">
      <Page id="one" side="right">
        <Characters/>
      </Page>
      <Page id="twos" side="left">
        <StrongStartAndDate height="13%" strongstart={notesSections['strongstart']} date={notesSections['date']} />
        <PotentialScenes height="25%" potentialscenes={notesSections['potentialscenes']}/>
        <SecretsAndClues height="40%" secretsandclues={notesSections['secretsandclues']}/>
        <Notes height="22%"/>
      </Page>
      <Page id="three" side="right">
        <FantasticLocations height="35%" fantasticLocations={notesSections['fantasticlocations']}/>
        <NpcsAndTreasure height="40%" npcsandorgs={notesSections['npcsandorgs']} treasure={notesSections['treasure']}/>
        <Notes height="25%"/>
      </Page>
      <Page id="four" side="left">
        <Monsters height="30%" monsters={notesSections['monsters']}/>
        <Tracker height="50%"/>
        <Notes height="20%"/>
      </Page>
    </div>;
}

function App() {
  const [sessionNotes, setSessionNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  return (    
    <div className="App">
      {!showNotes ? (
        <FilePickerForm 
          setShowNotes = {(val) => setShowNotes(val)}
          setSessionNotes = {(val) => setSessionNotes(val)}
          />
      ) : (
        <Pages sessionNotes={sessionNotes}/>
      )}
    </div>
  );
}

export default App;
