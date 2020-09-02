/*
  __  __ _ _           _                          _
 |  \/  (_) |__   __ _(_)  __      ____ _ ___    | |__   ___ _ __ ___
 | |\/| | | '_ \ / _` | |  \ \ /\ / / _` / __|   | '_ \ / _ \ '__/ _ \
 | |  | | | | | | (_| | |   \ V  V / (_| \__ \   | | | |  __/ | |  __/
 |_|  |_|_|_| |_|\__,_|_|    \_/\_/ \__,_|___/   |_| |_|\___|_|  \___|

*/
(function cr() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
// Copy Text Method
    if(request == "CR1") {
        navigator.clipboard.writeText(CR1),
        navigator.clipboard.readText().then(text =>
          {
          document.execCommand("", false, text, "Copy", "Paste");
          });
    }
    if(request == "CR2") {
        navigator.clipboard.writeText(CR2),
        navigator.clipboard.readText().then(text =>
          {
          document.execCommand("", false, text, "Copy", "Paste");
          });
    }
    if(request == "CR3") {
        navigator.clipboard.writeText(CR3),
        navigator.clipboard.readText().then(text =>
          {
          document.execCommand("", false, text, "Copy", "Paste");
          });
    }
    if(request == "CR4") {
        navigator.clipboard.writeText(CR4),
        navigator.clipboard.readText().then(text =>
          {
          document.execCommand("", false, text, "Copy", "Paste");
          });
    }
        document.execCommand("insertText", false, toInsert, "Copy", "Paste");
    });

/*
                   __
              ,_  :  \
              ; L_;   ;.
              `.' `   ` \
             ,'          ;
             ; ",        |
           .-' *         |
          $    _         ;_
           \   ;      _.-' )
            `+*     .'   -')
             .`._.-'      /
            ,(      .-   :
         _.: ; -'.'     `,
   /\--*"   \/  .'     ;  ;
  /  \      /-.-'"*.  /    \
 ;__.-*"\.--*"      ;:_..-+'
 \\     :       _.-'       ;
  \\    *.___.-'           :
 .-\\      \               |
: ;.-.      \-*""*.        ;
: : ; ; _.-*"      ;      /
 Y: : '"           ,___.-'
   Y'  __...___.-*"
    `"'
*/

  var CR1 = "Whatever text you want to use CR1";
  var CR2 = "Whatever text you want to use CR2";
  var CR3 = "Whatever text you want to use CR3";
  var CR4 = "Whatever text you want to use CR4";
  }
 )
();/*
         .   .=
       :\  > ~
      . ':  :  .-"  ^-. .~!
             ~            ~
     f                       /
    '                      >
    ~      .                \
    :   x^ ~                 ~
           '` ~'"            '
        '(  ' >` !
        '    4 ' '         :
        '" ~    ("(      :
        '            ""!
       ( .             '
        /               '
       4   ..:   .zMT!!!!?!+.
               !T!!!!!!!!!!!?T!!!!!!!!!!?T!+:.
            .!!!!!U!!!!!!!!!!!!!RX!!!!!!!!!!!!!!%.
           !!!!!!!!!M!!!!!!!!!!!!!R!!!!!!!!!!!!!!!!:
    .-.  :!!!!!!!!!!!M!!!!!!!!!!!!!?X!!!!!!!!!!!!!!!X
   >    R!!!!!!!!!!!!!!!!!!!!!!!!!!!!X!!!!!!!!!!!!!!UU
  ~ +!X!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~  ^4!!!!!!XRX*"``-
 >/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x   '!!!!t!f  (    `
 T!!!!!!!!!!!!!!!!!!X!!!!!!!!!!!!!!!!!!!!?n  "XXR! '  )    >
t!!!!!!!!!!!!!!!!!HR!!!!!!!!!!!!!!!!!!!!!!!!!    '  .! ^~-~
!!!!!!!!!!!!!!!!M!!!!!!!!!!!!!!!!!!!!!!!!!!!!!     '  =---
'X!!!!!!!!!X*"  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  "*XXX*""      'X!!!!!!!!!!!!!!!!!!XH@TTTTTTR:
                 ?!!!!!!!!!!!!!!!UT!!!!!!!!!!!!
                  "X!!!!!!!!!U@T!!!!!X@RMMMMMMML
                    'T*@@MT!!!!!!X@RMMMMMMMMMMMR
                     "X!!!!!XW@RMMMMMMMMMMMMMMMM
                       ?MMMMMMMMMMMMMMMMMMRMMMMM
                        9MMMMMMMMMMMMMMMM$MMMMMF
                        'MMMMMMMMMMMMMMM$MMMMM
                         4MMMMMMMMMMMMMMRMMMf      ..
                          MMMMMMMMMMMMMMRMMM    u!~:" `(
                          tMMMMMMMMMMMMMMMM :MM$F~~>    ':
                          'MMMMMMMMMMMMMM$RRMM$$X~~>      \
                           RMMMMMMMMMM@RMMMMMM$$B~~!       `
                           'MMMMMMMMRMMMMMMMMM$$$k~~L       ~
                            9MMMMMMMMMMMMMMMMMM$$$:~~>       :
                            M$MMMMMMMMMMMMMMMMM$$$$:~~:
                            MM$MMMMMMMMMMMMMMMMM$$$$L~~L      `
                           'MMMM$MMMMMMMMMMMMM**MM$$$k~~X
                           9MMMMMMRRRRf`          `"$$W~~!     `
                           @MMMMMMMMMM               "$$L~~\   '
                           MMMMMMMMMMM                  "*(::7"
                     u-. .'MMMMMMMMMME
                  z$$k>(9MMMMMMMMMMMM>
                 X#$$$$$@MMMMMMMMMMMM
                 '(?$$$$$BMMMMMMMMMMF
                   `(?$$$$MMMMMMMM
                     '(?R$$$$$$$$$$$
                        ~:~?#***#"~:
*/
