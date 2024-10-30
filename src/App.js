import './App.css';
import {useState} from "react";
import {Page} from "./FormatBlocks.js";
import {Characters,
  StrongStartAndDate,
  PotentialScenes,
  SecretsAndClues,
  FantasticLocations,
  NpcsAndTreasure,
  Notes,
  Monsters,
  SceneNotes
} from "./ContentBlocks.js";
import { Tracker } from './Tracker.js';
import { ParseSessionNotes } from './Parser.js';

function FilePickerForm({setShowPages, sessionNotes, setSessionNotes, characterNotes, setCharacterNotes}) {

  const handleFileSelected = (selectEvent) => {
    var cNotes = [];
    Array.prototype.forEach.call(selectEvent.target.files, (selectedFile) => {
      const reader = new FileReader();
      reader.onload = function(readEvent) {
        const fileInfo = {
          name: selectedFile.name,
          body: readEvent.target.result
        };
        if(selectEvent.target.id === "notesfile") {
          setSessionNotes(fileInfo);
        }
        else if(selectEvent.target.id === "characterfiles") {
          cNotes.push(fileInfo);
          setCharacterNotes(cNotes);
        }
      }
      reader.readAsText(selectedFile);
    });
  }

  const handleShowSessionPages = (event) => {
    setShowPages("session");
  }

  const handleShowScenePages = (event) => {
    setShowPages("scenes");
  }

  const pickerBoxStyle = {
    width: "20em",
    padding: "2em",
    margin: "auto",
    marginTop: "20em"
  };

  const buttonDivStyle = {
    background: "gray",
    color: "white",
    padding: "0.5em",
    margin: "1em",
    borderRadius: "0.5em",
    textAlign: "center"
  };

  const buttonStyle = {
  };

  return <div className="box" id="filepicker" style={pickerBoxStyle}>
      <form>
      <div style={buttonDivStyle}>
        <label htmlFor="characterfiles" style={buttonStyle}>Character Files</label>
        <input id="characterfiles" type="file" multiple style={{display:"none"}} onChange={handleFileSelected} />
      </div>
      <div style={buttonDivStyle}>
        <label htmlFor="notesfile" style={buttonStyle}>Notes File</label>
        <input id="notesfile" type="file" style={{display:"none"}} onChange={handleFileSelected} />
      </div>
      <div style={buttonDivStyle}>
        <label htmlFor="showsessionpage" style={buttonStyle}>Show Session Pages</label>
        <input id="showsessionpage" type="button" style={{visibility:"hidden"}} onClick={handleShowSessionPages} />
      </div>
      <div style={buttonDivStyle}>
        <label htmlFor="showscenepage" style={buttonStyle}>Show Scene Pages</label>
        <input id="showscenepage" type="button" style={{visibility:"hidden"}} onClick={handleShowScenePages} />
      </div>
    </form>
  </div>;
}
function SessionPages({sessionNotes, characterNotes}) {
  const notesSections = ParseSessionNotes(sessionNotes);

  return <div id="pages">
      <Page id="one" side="right">
        <Characters characterNotes={characterNotes}/>
      </Page>
      <Page id="two" side="left">
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

function ScenePages() {
  return <div id="pages">
      <Page id="one" side="right">
        <SceneNotes flexWeight="1"/>
        <SceneNotes flexWeight="1"/>
        <SceneNotes flexWeight="1"/>
        <SceneNotes flexWeight="1"/>
      </Page>
      <Page id="two" side="left">
        <SceneNotes flexWeight="1"/>
        <SceneNotes flexWeight="1"/>
        <SceneNotes flexWeight="1"/>
        <SceneNotes flexWeight="1"/>
      </Page>
    </div>;
}

function App() {
  const [sessionNotes, setSessionNotes] = useState({file: "", body: ""});
  const [characterNotes, setCharacterNotes] = useState([]);
  const [showPages, setShowPages] = useState("");

  return (    
    <div className="App">
      {showPages === "session" ? (
        <SessionPages sessionNotes={sessionNotes.body} characterNotes={characterNotes}/>
      ) : ("")}
      {showPages === "scenes" ? (
        <ScenePages/>
      ) : ("")}
      {showPages === "" ? (
        <FilePickerForm 
        setShowPages = {(val) => setShowPages(val)}
        sessionNotes = {sessionNotes}
        setSessionNotes = {(val) => setSessionNotes(val)}
        characterNotes = {characterNotes}
        setCharacterNotes = {(val) => setCharacterNotes(val)}
        />
    ) : ("")}
    </div>
  );
}

export default App;
