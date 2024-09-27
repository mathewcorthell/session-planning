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
  NpcsAndMonsters,
  NotesAndTreasure
} from "./ContentBlocks.js";
import { Tracker } from './Tracker.js';



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
  const lines = sessionNotes.split("\n");
  const noteSections = {};
  var section = "";
  let header = /^#.*/;
  for (let line of lines) {
    if(header.test(line)) {
      section = line.replaceAll(/[#\s]/g, "").toLowerCase();
      noteSections[section] = "";
    }
    else {
      noteSections[section] += line + "\n";
    }
  }

  return <div id="pages">
      <Page id="one" side="right">
        <Characters/>
      </Page>
      <Page id="twos" side="left">
        <StrongStartAndDate flexWeight="1.5" strongstart={noteSections['strongstart']} date={noteSections['date']} />
        <PotentialScenes flexWeight="3" potentialscenes={noteSections['potentialscenes']}/>
        <SecretsAndClues flexWeight="4" secretsandclues={noteSections['secretsandclues']}/>
      </Page>
      <Page id="three" side="right">
        <FantasticLocations flexWeight="2" fantasticLocations={noteSections['fantasticlocations']}/>
        <NpcsAndMonsters flexWeight= "3.5" npcsandorgs={noteSections['npcsandorgs']} monsters={noteSections['monsters']}/>
        <NotesAndTreasure flexWeight="5" treasure={noteSections['treasure']} />
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
