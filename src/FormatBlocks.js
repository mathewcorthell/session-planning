
export function Page ({side = "left", children}) {
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
  

export function InsetRow({flexWeight, children}) {
    const styles= {
      padding: 0,
      flex: flexWeight,
      position: "relative"
    }
  
    return <div style={styles}>
      {children}
    </div>;
  }
  
export function InsetRowBackground({id, children}) {
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

export function InsetRowInset({id, width, height, children}) {
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
  
export function ColumnRow({flexWeight, children}) {
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
  
export function ColumnRowBox({id, flexWeight, children, skipBox = false, nestColumn = false}) {
    const styles = {
      flex: flexWeight,
      flexBasis: "100%",
      padding: 0
    };
    if(skipBox) 
      styles.border = 0;
    if(nestColumn) {
      styles.display = "flex";
      styles.flexDirection = "column";
    }
  
  
    return <div id={id} className="box" style={styles}>
      {children}
    </div>;
  }
  