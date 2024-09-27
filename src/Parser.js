

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