function goodPractices() {
    
      debugger
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
        // are you ABSOLUTELY SURE what 'teamKey' is?
        // use debugger to find out!
        debugger
  
        // what is 'data' at each loop through out this block?
        // when will the following line of code work and when will it break?
        let data = teamObj.player
        for (let key in data) {
          debugger
        }
      }
    }
  }