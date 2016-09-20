app.directive('chatBot', function(){
  return {
    restrict: 'E',
    template: `
    <!-- -->
    <div>

        <h1 id="botText">{{botText[selectArray]}}</h1>
        <img id="botImage" src="chatbot/chat-0{{selectArray+1}}.png" />
        <button style="padding:20px; margin:30px" id="botTextButton">Cilck me for help</button>

    <div>
    `,
    controller: function($scope){
      $scope.$watch('botText', function (newValue, oldValue) {
        console.log(newValue)
        console.log(oldValue)

      });
      $scope.selectArray = 0;
      $scope.getSelectArray = function(){
        console.log("HERE!!!")
        return s.selectArray;
      }
      $scope.botText = ["Hi! How can I help you today", "Are you sure you don't want any help?", "Seriously if there is anything you need just hit the button", "I mean really I can do whatever for you, I'm like friggen google over here", "Oooh hey gotta go, good luck with that!"];
    },
    link: function(s, e, a){
          e.on('mouseover', function() {
            // console.log("this is e", s.botText, s.selectArray)
              var botTextLength = s.botText.length;
              if (s.selectArray < botTextLength-1) s.selectArray++;
              angular.element('#botText').text(s.botText[s.selectArray])
              angular.element('#botImage').attr('src',`chatbot/chat-0${s.selectArray+1}.png` )
              var dWidth = angular.element(document).width() - 850, // 100 = image width
                  dHeight = angular.element(document).height() - 850, // 100 = image height
                  nextX = Math.floor(Math.random() * dWidth),
                  nextY = Math.floor(Math.random() * dHeight);
              $("#chat-bot").animate({ left: nextX + 'px', top: nextY + 'px' });
                // $("#botTextButton").on('click').animate({ left: nextX + 500 + 'px', top: nextY + 500 + 'px' });
          });

      // height: ($("#chat-bot").css("height") + 50)
      e.css({
        "margin": "30px",
        "padding": "20px",
        "position": "absolute",
        "background-color": "rgba(0,0,0,0)",
        "height": "500px",
        "width": "500px",
        "top": "0",
        "left": "0",
        "z-index": "999"
      })

    }
  }
})
