import React, { useState } from 'react';


function Score() {




  return (
     <div>
        {window.sessionStorage.getItem("score")}
     </div>
  );
}

export default Score;