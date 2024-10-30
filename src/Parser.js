

export function ParseSessionNotes(rawText) {
    rawText = rawText.replaceAll(/\[\[/g, "**");
    rawText = rawText.replaceAll(/\]\]/g, "**");

    const lines = rawText.split("\n");
    const sections = {};
    var section = "";
    let header = /^#.*/;
    for (let line of lines) {
      if(header.test(line)) {
        section = line.replaceAll(/[#\s]/g, "").toLowerCase();
        sections[section] = "";
      }
      else {
        sections[section] += line + "\n";
      }
    }

    return sections;
}

export function ParseCharacterNotes(rawText) {
  rawText = rawText.replaceAll(/\[\[/g, "**");
  rawText = rawText.replaceAll(/\]\]/g, "**");

  const lines = rawText.split("\n");
  var cleanedText = "";
  var inProperties = false;
  let propertiesBoundary = /^---/;
  let summaryStart = /^Summary: /;
  for (let line of lines) {
    if(propertiesBoundary.test(line)) {
      inProperties = !inProperties;
    }
    else {
      if(inProperties) {
        if(summaryStart.test(line)) {
          cleanedText += "**" + line.replace(/^Summary:\s+/, "") + "**\n";
        }
      }
      else {
        cleanedText += line + "\n";
      }  
    }
  }

  return cleanedText;
}