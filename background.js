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
               '~::::::?$$$$$$...d$$$XR$$$$$$$$RXW$X:'`
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
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
#########################-=[Sub Parent Menu]=-##################################
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
