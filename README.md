# Studdy

## How Do I Run This?
1. Install node.js: https://nodejs.org/en/download/ <br>
2. Install npm: https://www.npmjs.com/get-npm <br>
3. Install yarn: https://classic.yarnpkg.com/en/docs/install/#debian-stable <br>
4. Install React.js: https://yarnpkg.com/package/react <br>
5. Install Visual Studio Code: https://code.visualstudio.com/download <br>
6. Clone this project: `git clone https://github.com/CSCI201Group/studdy.git` <br>
7. Set up SQL Database: <br>
&emsp; - Open studdy_db.sql in MySQL Workbench > localhost connection and run the script: <br>
&emsp;&emsp; a. Highlight line 1 and run it to create database "studdy" <br>
&emsp;&emsp; b. Refresh your schemas window, find "studdy," and double-click/set as default schema <br>
&emsp;&emsp; c. Highlight everything from line 3 to 54 and run it to create tables <br>
&emsp;&emsp; d. Refresh your schemas window again <br>
&emsp;&emsp; e. Highlight everything from line 57 to 61 and run it to insert the 2 sample users (we'll hash the password later dw) <br>
&emsp;&emsp; f. Run line 63 to check if the 2 users are in the database <br>
&emsp;&emsp; ![image](https://user-images.githubusercontent.com/65131556/142823164-deb55f96-dbbf-4b54-84cd-071374d8b79a.png) <br>

8. Open the project in Eclipse <br>
&emsp; a. In Eclipse, File > Import > Maven > Existing Maven Projects > Browse for the studdy folder you cloned <br>
&emsp;&emsp; - It'll take a moment to import, give it a minute <br>
&emsp; b. Double check the database username and password: <br>
&emsp;&emsp; i. src/main/resources > application.properties <br>
&emsp;&emsp; - The username and password is the same as ones you use to login to the localhost connection <br>
&emsp; c. Right click on the studdy project folder in "Package Explorer" > Run As > Maven build (the one without ..) <br>
&emsp; d. Type in "package" for "Goals:" and click Run <br>
&emsp; e. If the build is successful, it'll say "BUILD SUCCESS" in the console. <br>
&emsp; f. Run the application: <br>
&emsp;&emsp; src/main/java > com.studdy.springboot > Right click on SpringbootApplication.java > Run As > Java Application <br>
&emsp; There should be no errors and somewhere in the very right column should show: <br>
&emsp;&emsp; Tomcat started on port(s): 8080... <br>
&emsp;&emsp; Started SpringbootApplication in 4.355 seconds <br>
&emsp;&emsp; ![image](https://user-images.githubusercontent.com/65131556/142823047-126b1b55-c8fe-409e-ab38-7acf15eecbd2.png) <br>

9. Install dependencies and packages (in your terminal): <br>
&emsp; a. Using the terminal, go into the folder "frontend" and install all dependencies: `yarn install` <br>
&emsp; b. Install React Router package: `npm install react-router`<br>
&emsp; c. Install React Material UI: `npm install @material-ui/core` and `npm install @material-ui/icons` <br>
&emsp; - If npm doesn't work, try replacing `npm install` with `yarn add` <br>
&emsp; d. Install Sass Stylesheet: `$ yarn add node-sass@4.14.1`
10. Run the website: `yarn start` <br>
This will automatically start the website on http://localhost:3000/ <br>
11. Test the SQL POST and GET requests: <br>
&emsp; a. POST: When you click on the "Create Account" link (scroll all the way to the bottom --I'll fix it later) and fill out all the forms, the Status on the bottom of the page should say "Status: Data successfully updated" <br>
&emsp; b. GET: When you click on the "Database" link, a table of all students should show up (on the bottom of the page too), including the one that you added (if you added any) <br>
&emsp; ![image](https://user-images.githubusercontent.com/65131556/142823496-3c27302e-fb88-40bd-8eee-549b09a63d5a.png) <br>

-----
## Front End Resources
Color Scheme--grab the hex colors from Figma: https://www.figma.com/file/wtK7x05CcbjTCnZX88F79u/201Project?node-id=0%3A1 <br>
Material UI Icons--find icons to use here: https://materialdesignicons.com/ <br>
Sass Stylesheet Guide: https://create-react-app.dev/docs/adding-a-sass-stylesheet/ <br>

-----
## Back End Material
Our design doc: https://docs.google.com/document/d/1LkI-r2-W-Kr4anV-TMOPIfkEBVw2XS65G6MAw1XK3fQ/edit?usp=sharing <br>


*Ask Serena for debugging questions if there's an issue with any of these instructions*
