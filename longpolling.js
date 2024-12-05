const makeRequest = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const data = await res.json();
      console.log("new message", data);
      makeRequest();
    } catch (e) {
      console.log(e);
      makeRequest();
    }
  };
  makeRequest();

  // we call the fucntion api only when there is cerain update from the rsponse 
  // we always aintain 1 tcp connecion open with server
  // so afert calling the api iw will again call the api and wait utill we do not send the new data
  