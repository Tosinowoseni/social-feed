import React, { useState } from 'react';


function App() {
    
  const [entries, setEntries] = useState([{weight: 175, date:'11-23-2021'}])
  
  return (
        <div >
          <NamePresenter />
                  
                </div>
    );
}

export default App;
