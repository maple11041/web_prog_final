## [109-1] Web Programming Final
### (Group 92) 團訂飲料網站
* deployed link: 不公開
* Demo 影片連結: https://youtu.be/0Mdfel1GRYk
* 組員: 簡暐晉、蔡丞威
* 這個服務在做什麼?
我們製作的是方便進行團訂的工具，在學校進行團購常常遇到一些問題，例如:忘記自己買了什麼，有沒有付錢了...。而我們的服務則解決了這些問題。
開團的人可以觀看所有訂單，可以清楚的知道誰買了些什麼，要付多少錢，並且可以標記一份訂單是否已經付錢。除此之外，開團的人可以隨時收單，不讓其他人繼續填。加團的人則可以直接下訂單，並且可以隨時查看自己買的商品和價格。除此之外，我們還支援團訂的人可以查看自己以前的訂單，方便記錄自己花了多少錢在買飲料上XD

* 使用/操作方式 
    * 使用者端:分為開團主揪與加團者兩種角色，登入之後就可以選擇要當主揪或是跟團，同時主揪也可以選擇什麼時候要收單，且可以登記誰已經付錢了。另外主揪和訂購人皆有查詢訂單的功能，方便查詢自己的訂單記錄。
* 使用與參考之框架/模組/原始碼
    * login 的部分:https://github.com/SinghDigamber/react-login-signup-ui-template
    * menu 部分:https://codesandbox.io/embed/react-restaurant-menu-i4d3o?theme=dark&view=preview&codemirror=1&hidenavigation=1&hidedevtools=1
* 專題製作心得
    * 蔡丞威:
我們組是兩個人，感覺最重要的是要溝通(例如需要哪些api，api回傳的形式，前端功能的分工...)，一開始的時候沒溝通好就有看不懂對方code，修了data storage方式所以要改一部分code之類的。但後來就漸入佳境，遇到bug頂多一小時就可以解決。在這份專題中真的學到很多合作的思路(ex.code,folder要好好排版，善用github的branch，跟對方溝通的技巧...)，這種收穫在大學正常修課真的是很難獲取的，所以這次經驗對我們來說十分的珍貴
    * 簡暐晉:
這次project是我第一次做出完整的前後端服務，覺得最困難的地方是前端的使用者版面設計，因為沒有一些美術背景所以在前端畫面的設計調整了很久都還是覺得不太滿意，此外由於時間有限，沒辦法對這個網站做出完整的軟體測試，以及一些資安上面的防範，僅能使用簡單的JWT以及password hashing，希望未來有機會可以把這些地方做得更完整

* 使用之第三方套件、框架、程式碼
    * Frontend: React, React boostrap, material-UI, React Router, React Hooks, jsonwebtoken, bcryptjs
    * Middleware: Axios
    * Backend: node,express,mongodb
    * Database: mongodb


* Deployed Link: http://140.112.42.52:3000
* 組員貢獻:
    * 蔡丞威: 主要負責前端功能實作和axios接後端api
    * 簡暐晉: 負責後端開發，建構database，設計api，前端網站畫面設計與實作

