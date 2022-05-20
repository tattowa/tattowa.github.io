"use strict"

{  
   function setWord() {
      
      word=words.splice(Math.floor(Math.random() * words.length),1)[0]
      target.textContent = word
      loc = 0
   }
   const words = [
      "red","blue","violet","purple","skyblue","white","black","pink","brown","yellow","orange","grey"
   ]
   let word
   let loc = 0
   let startTime
   let isPlaying = false;

   
   
   const target = document.getElementById("target")


   document.addEventListener("click", () => {
      if (isPlaying === true) {
         return;
      }
      isPlaying = true;
      setWord()
      target.style.letterSpacing="20px"
      startTime=Date.now()
   })
   document.addEventListener("keydown", (e) => {
      if (isPlaying === true) {
         return;
      }
      if (e.keyCode === 13) {
         isPlaying = true;
         setWord()
         target.style.letterSpacing = "20px"
         startTime = Date.now()
      }
   })
   
   document.addEventListener("keydown", e => {
      if (e.key !== word[loc]) {
         return;
      }
   loc++

   target.textContent = "_".repeat(loc) + word.substring(loc)
      
      if (loc === word.length) {
         if (words.length === 0) {
            const Time = Date.now()-startTime
            const result = document.getElementById("result")
            result.textContent = `Finished in ${Time / 1000}sec`;
            const more = document.getElementById("more")
            more.textContent = "もう一度遊ぶ"
            more.style.display="block"
            return
         }

         setWord()
      }
   })

   const more = document.getElementById("more")
      more.addEventListener("click", () => {
      location.reload()
   })
   
      
   

}