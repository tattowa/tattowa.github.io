"use strict";
{  


   class Panel {
      constructor(game) {
         this.game = game;
         this.el = document.createElement("li")
         this.el.classList.add("pressed")
         this.el.addEventListener("click", () => {
            this.check();
         })
      }

      getEl() {
         return this.el;
      }

      activate(num) {
         this.el.classList.remove("pressed");
         this.el.textContent = num;
      }

      check() {
         if (this.game.getCurrentNum() === parseInt(this.el.textContent, 10)) {
            this.el.classList.add("pressed");
            this.game.addCurrentNum();
         }
         if (this.game.getCurrentNum() === this.game.getLevel() ** 2) {
            clearTimeout(this.game.getTimeoutId())

            const modal = document.getElementById("modal")
            const score = document.getElementById("score")
            const conti = document.getElementById("conti")
            const quite = document.getElementById("quite")
            const mask = document.getElementById("mask")
            const timer=document.getElementById("timer")

            modal.classList.remove("hidden")
            mask.classList.remove("hidden")

            const time=timer.textContent
            score.textContent = `Finished in ${time} second!`
            
            conti.addEventListener("click", () => {
               location.reload()
            })

            quite.addEventListener("click", () => {
               conti.click()
            })





         }
      }
   }

   class Board {
      constructor(game) {
         this.game = game;
         this.panels = [];
         for (let i = 0; i < this.game.getLevel() ** 2; i++) {
            this.panels.push(new Panel(this.game));
         }
         this.setup();
      }

      setup() {
         const board = document.getElementById("board");
         this.panels.forEach(panel => {
            board.appendChild(panel.getEl())
         })
      }
      activate() {
         const nums = [];
         for (let i = 0; i < this.game.getLevel() ** 2; i++) {
            nums.push(i)
         }

         this.panels.forEach(panel => {
            const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
            panel.activate(num);
         })
      }
   }


   class Game {
      constructor() {
         this.level = 3
         this.board = new Board(this);

         this.currentNum = undefined;
         this.startTime = undefined;
         this.timeoutId = undefined;

         function delPanel() {
            const board = document.getElementById("board")
            board.innerHTML = "";
         }

      

      const lev3 = document.getElementById("lev3")
      lev3.addEventListener("click", () => {
         if (typeof this.timeoutId !== "undefined") {
            clearTimeout(timeoutId)
         }
         delPanel()
         this.level = 3
         this.setup()
         this.board = new Board(this);


      })


      const lev4 = document.getElementById("lev4")
      lev4.addEventListener("click", () => {
         if (typeof this.timeoutId !== "undefined") {
            clearTimeout(timeoutId)
         }
         delPanel()
         this.level = 4
         this.setup()

         this.board = new Board(this);

      })

      const lev5 = document.getElementById("lev5")
      lev5.addEventListener("click", () => {
         if (typeof this.timeoutId !== "undefined") {
            clearTimeout(timeoutId)
         }
         delPanel()
         this.level = 5
         this.setup()
         this.board = new Board(this);

      })

        

         const btn = document.getElementById("btn")
         btn.addEventListener("click", () => {
            this.start()
         })

         this.setup()

         
         
      }

      setup() {
         const container = document.getElementById("container");
         container.style.width = 50 * this.level + 20 + "px";
         
      }

      start() {
         if (typeof this.timeoutId !== "undefined") {
            clearTimeout(timeoutId)
         }
         this.currentNum = 0;

         this.board.activate();

         this.startTime = Date.now();
         this.runTimer()
      }

      runTimer() {
         const timer = document.getElementById("timer");
         timer.textContent = ((Date.now() - this.startTime) / 1000).toFixed(2);

         this.timeoutId = setTimeout(() => {
            this.runTimer();
         }, 10);
      }
      
      addCurrentNum() {
         this.currentNum++;
      }

      getCurrentNum() {
         return this.currentNum
      }

      getTimeoutId() {
         return this.timeoutId
      }

      getLevel() {
         return this.level
      }
      
   }

   new Game()
   

   
}