<h3>friend tracker</h3>

This app represent a social-media profile page which inculdes:
<ul>
  <li>status feeds from your following friends
  <li>a list of all registered users
  <li>edit personal profile
</ul>

<h3>Install</h3>
1. Go to mongodB website choose a fitable version to download<br>
https://www.mongodb.org/downloads#production

2. After installed mongodb, open terminal: <br>
cd /c/Program Files/MongoDB/Server/3.2/bin <br>
./mongod <br>

3. Open another terminal to check the users and status <br>
cd /c/Program Files/MongoDB/Server/3.2/bin <br>
./mongo <br>

4. Create a new database: <br>
use friend_tracker

5. After you register from website, you can refresh mongodB: <br>
show collections

6. To show all the users: <br>
db.users.find().pretty()

7. To show all the status: <br>
db.status.find().pretty()

8. Go back to our source code <br>
cd friend_tracker <br>
npm install

double check <b>--node_modules</b> with "package.json".

<b>--uploads</b> records user profile pictures and testing results screenshot. <br>
<b>--app</b> frontend controllers for profile editing, register, login, navigation and friend track. <br>
<b>--server</b> backend controllers for interactive with mongodB, update users and status. <br>
<b>--server.js</b> application intergration script running by nodeJS. <br>

<h3>Run</h3>

open terminal: <br>
node server.js

open firefox (it is better to use firefox, chrome will meet some unexpected problems) <br> 
localhost:3000

You can choose your own jpg picture to update your head photo, the picture will automatically recorded in <b>--uploads</b> <br>
You can open multiple websites to log in different users and update status, then your friends status will be seen after 5 seconds. <br>

<b>Notice:</b> 
Each time you edit your profile or update your status or change following friends, you should refresh the page or re-login.
I will follow up with synchronizing problems in the coming version.
