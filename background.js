/*
                                             :
                            ~Mihai~        :::
                    '::                   ::::
                    '::::.     .....:::.:::::::
                    '::::::::::::::::::::::::::::
                    ::::::XUWWWWWU:::::XW$$$$$$WX:
                    ::::X$$$$$$$$$$W::X$$$$$$$$$$Wh
                   ::::t$$$$$$$$$$$$W:$$$$$$P*$$$$M::
                   :::X$$$$$$""""$$$$X$$$$$   ^$$$$X:::
                  ::::M$$$$$$    ^$$$RM$$$L    <$$$X::::
                .:::::M$$$$$$     $$$R:$$$$.   d$$R:::`
               '~::::::?$$$$$$...d$$$X$6R$$$$$$$$RXW$X:'`
                 '~:WNWUXT#$$$$$$$$TU$$$$W6IBBIW@$$RX:
================================================================================
**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>**<>
================================================================================
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
#########################-=[Top Parent Menu]=-##################################
*/
chrome.contextMenus.create(
    {
        "title": "Menu1",
        "contexts":["editable"],
        "id": "Menu1",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage.executeScript(tab.id, "", function cr() {
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Menu2",
        "contexts":["editable"],
        "id": "Menu2",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage.executeScript(tab.id, "", function cr() {
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Got Feedback?",
        "contexts":["editable"],
        "id": "Got Feedback?",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage.executeScript(tab.id, "", function cr() {
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Send it to mdodoaca@google.com",
        "contexts":["editable"],
        "parentId": "Got Feedback?",
        "id": "SendFeedback",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage.executeScript(tab.id, "", function cr() {
            });
        }
    }
);
/*
                                         _
                                       / )
                                    ,-(,' ,---.
                                   (,-.\,' `  _)-._
                                      ,' `(_)_)  ,-`--.
                                     /          (      )
                                    /            `-.,-'|
                                   /                |  /
                                   |               ,^ /
                                  /                   |
                                  |                   /
                                 /                   /
                                 |                   |
                                 |                   |
                                /                    \
                              ,.|                    |
                            (`\ |                    |
                            (\  |   --.      /  \_   |
                             (__(   ___)-.   | '' )  /)
                                 `---...\\\--(__))/-'-'
*******************************************************************************
===============================================================================
===============================================================================

                                              +T+++++++T+++
                                              +++|+++++++|+++|
                                              ++++++++++++++/+
                                              ++++++++++++++/++
                                              +++++++++++++/++++
                                              +++++:::iiiII/++++.
                                              IIIIIIIIIIII/Ii++++
                                              ITTTTTTTTTT/III++++.
                                              "IIIIIIIIIIiIIII++++
                                                "IIIIIIIIIiIIII+++.
                                                  "IIIIIIIIiIIIi+++
                                                    "IIIIIIIiIII+++
                                                      "I/\IIIiIII++
                                                       ///\IIIiIIi+
                                        .o8OOOOOOOOOOOOOo/IIIIIiIIi
                                      oOOOOOOOOOOOOOOOOOOOOIIIIIiI
                                     888888888888OOOOOOOOOOOOIIIII
                                o8OOOOOOOOOOOOOOO88888OOOOOOOOIIIT
                              oOOOOOOOOOOOOOOOOOOOOOOO888OOOOOb
                             8OOOOOOOOOOOOOOOOOOOOOOOOOOO8OOOOOb
                             OOOOOOOOOOOOOOOOOOOOOOOOOOOOO88OOOOb
                             OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO8OOOO.
                             OOOO~~~~~~~~~~~~~~~~OOOOOOOOOOOO8OOOb
                             OO~ oo8888888888888oo ~~OOOOOOOOO8OOO
                             8 oO888888888888888888oo ~~OOOOOOO8OO
                             8 OO888888888888888888888oo OOOOOO8OO
                             ~8 O8888888888888888888888888 ~OOOOOP
                               ~O88 ~888~Y88Y88P    888888>-~OOOO
                                 88b ~~ .888 ~~    d88888| ( OOOO
                                  88Xooo88888ooood8888888/ /XooO~
                                   ~88888888888888888888| |OOX|
                                   //88888888888888888:',:OOO|
                                 ,'/OOOO888888888888~<-
                                 |   Y ..  ,O\******    _ / | |<_
                               ___~-'8o8OO88OX8OOOO    ~ Y  '/O8|
                             ,'   `-_OOOOOOOXX|OOOO8o.  .A  /OX/>
                            /...     \X8OOOXX/|OOOOO|OOOOO8X\X/ <_
                           888888b    \XXX8X/:|OOOOO|\8XXXXX      \
                          d88888888    |\X8/::|8XXXX|\IXX~  \ d8.  \
                          888888888b   \ \/ ::lXXXXXl ~~ \--_|888   \
                          Y88DR88888    |  .::"-----"    /_-_|~8~   |
                           888888888b   \  :::          /_ -_|      |
                           8888GUZ888    | ::          /_ -_ |      |
                            888888888b   \:::         /_ -_ /       [
                             888888888    |`:        /  -_ /       ]
                              88888888b     |       |     /        |
                               88888888b    [       |    (        /
                                88888888   ]        |            /
                                 ~888888b  |         \         ,'
                                   ~88888  |          `.___,--'
                                     ~~88_/



*/

chrome.contextMenus.create(
    {
        "title": "Sub-Menu1",
        "contexts":["editable"],
        "parentId": "Menu1",
        "id": "SubMenu1",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "CR1", function(clickedEl) {
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Sub-Menu2",
        "contexts":["editable"],
        "parentId": "Menu1",
        "id": "Sub-Menu2",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "CR2", function(clickedEl) {
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Sub-Menu3",
        "contexts":["editable"],
        "parentId": "Menu2",
        "id": "SubMenu3",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "CR3", function(clickedEl) {
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Sub-Menu4",
        "contexts":["editable"],
        "parentId": "Menu2",
        "id": "Sub-Menu4",
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "CR4", function(clickedEl) {
            });
        }
    }
);


/*
               _,........__
            ,-'            "`-.
          ,'                   `-.
        ,'                        \
      ,'                           .
      .'\               ,"".       `
     ._.'|             / |  `       \
     |   |            `-.'  ||       `.
     |   |            '-._,'||       | \
     .`.,'             `..,'.'       , |`-.
     l                       .'`.  _/  |   `.
     `-.._'-   ,          _ _'   -" \  .     `
`."""""'-.`-...,---------','         `. `....__.
.'        `"-..___      __,'\          \  \     \
\_ .          |   `""""'    `.           . \     \
  `.          |              `.          |  .     L
    `.        |`--...________.'.        j   |     |
      `._    .'      |          `.     .|   ,     |
         `--,\       .            `7""' |  ,      |
            ` `      `            /     |  |      |    _,-'"""`-.
             \ `.     .          /      |  '      |  ,'          `.
              \  v.__  .        '       .   \    /| /              \
               \/    `""\"""""""`.       \   \  /.''                |
                `        .        `._ ___,j.  `/ .-       ,---.     |
                ,`-.      \         ."     `.  |/        j     `    |
               /    `.     \       /         \ /         |     /    j
              |       `-.   7-.._ .          |"          '         /
              |          `./_    `|          |            .     _,'
              `.           / `----|          |-............`---'
                \          \      |          |
               ,'           )     `.         |
                7____,,..--'      /          |
                                  `---.__,--.'
*/
