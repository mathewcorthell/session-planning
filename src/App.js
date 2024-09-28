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
  Notes
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
        <StrongStartAndDate flexWeight="1.5" strongstart={notesSections['strongstart']} date={notesSections['date']} />
        <PotentialScenes flexWeight="2" potentialscenes={notesSections['potentialscenes']}/>
        <SecretsAndClues flexWeight="4" secretsandclues={notesSections['secretsandclues']}/>
        <Notes flexWeight="2"/>
      </Page>
      <Page id="three" side="right">
        <FantasticLocations flexWeight="3" fantasticLocations={notesSections['fantasticlocations']}/>
        <NpcsAndTreasure flexWeight= "3" npcsandorgs={notesSections['npcsandorgs']} treasure={notesSections['treasure']}/>
        <Notes flexWeight="3"/>
      </Page>
      <Page id="four" side="left">
        <Tracker/>
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
