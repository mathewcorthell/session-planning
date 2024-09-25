import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Page ({side = "left", children}) {
  const styles = {
    width: "8.5in",
    height: "11in",
    paddingTop: "0.3in",
    paddingBottom: "0.3in",
    paddingLeft: "0.3in",
    paddingRight: "0.3in",
    display: "flex",
    flexDirection: "column",
    background: "radial-gradient(gray 1px, transparent 0)",
    backgroundSize: ".25in .25in",
    backgroundClip: "content-box"
  };

  if(side === "left") {
    styles['paddingRight'] = "0.556in";
  }
  if(side === "right") {
    styles['paddingLeft'] = "0.556in";
  }

  return <div style={styles}>
    {children}
  </div>
}

function InsetRow({flexWeight, children}) {
  const styles= {
    padding: 0,
    flex: flexWeight,
    position: "relative"
  }

  return <div style={styles}>
    {children}
  </div>;
}

function InsetRowBackground({id, children}) {
  const styles = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    padding: 0
  }
  return <div id={id} className="box" style={styles}>
    {children}
  </div>
}
function InsetRowInset({id, width, height, children}) {
  const styles = {
    position: "absolute",
    width: width,
    height: height,
    right: 0,
    padding: 0
  }

  return <div id={id} className="box" style={styles}>
    {children}
  </div>
}

function ColumnRow({flexWeight, children}) {
  const styles = {
    flex: flexWeight,

    padding: 0,
    display: "flex",
    flexDirection: "row",
  }

  return <div style={styles}>
    {children}
  </div>;
}

function ColumnRowBox({id, flexWeight, children}) {
  const styles = {
    flex: flexWeight,
    flexBasis: "100%",
    padding: 0
  }

  return <div id={id} className="box" style={styles}>
    {children}
  </div>;
}

function StrongStartAndDate ({flexWeight}) {
  return <InsetRow flexWeight={flexWeight}>
      <InsetRowBackground id="strongstart">
          <h1 className="boxlabel">Strong Start</h1>
          <p>As the party awakes in the morning, they find a stranger hiding on the deck.</p>
      </InsetRowBackground>
      <InsetRowInset id="date" width="2.5in" height="0.5in">
          <h1 className="boxlabel">Date</h1>  
      </InsetRowInset>
    </InsetRow>;
}

function PotentialScenes() {
  return <ColumnRow flexWeight="3">
      <ColumnRowBox id="potentialscenes" flexWeight="1">
        <h1 className="boxlabel">Potential Scenes</h1>
      </ColumnRowBox>
    </ColumnRow>;
}

function SecretsAndClues() {
  return <ColumnRow flexWeight="4">
      <ColumnRowBox id="secretsandclues" flexWeight="1">
        <h1 className="boxlabel">Secrets and Clues</h1>
      </ColumnRowBox>
    </ColumnRow>;
}

function FantasticLocations({flexWeight}) {
  return <ColumnRow flexWeight={flexWeight}>
      <ColumnRowBox id="locations">
        <h1 className="boxlabel">Fantastic Locations</h1>
      </ColumnRowBox>
    </ColumnRow>;
}

function NpcsAndMonsters({flexWeight}) {
  return <ColumnRow flexWeight={flexWeight}>
      <ColumnRowBox id="npcs">
        <h1 className="boxlabel">NPCs & Orgs</h1>
      </ColumnRowBox>
      <ColumnRowBox id="monsters">
        <h1 className="boxlabel">Monsters</h1>
      </ColumnRowBox>
    </ColumnRow>;
}

function NotesAndTreasure({flexWeight}) {
  return <InsetRow flexWeight={flexWeight}>
      <InsetRowBackground id="notes">
          <h1 className="boxlabel">Notes</h1>
      </InsetRowBackground>
      <InsetRowInset id="treasure" width="2.5in" height="2in">
          <h1 className="boxlabel">Treasure</h1>  
      </InsetRowInset>
    </InsetRow>;
}

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
  return <div id="pages">
      <Page id="strongstart" side="left">
        <StrongStartAndDate flexWeight="1.5" />
        <PotentialScenes flexWeight="3" />
        <SecretsAndClues flexWeight="4" />
      </Page>
      <Page side="right">
        <FantasticLocations flexWeight="2" />
        <NpcsAndMonsters flexWeight= "3.5" />
        <NotesAndTreasure flexWeight="5" />
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
