# Web-Server-ECommerce

![Head shot](./images//headshot..jpg)

Hello, my name is Taylor Pitman! I am in my final semester at SUNY New Paltz, pursuing a degree in Computer Science. Originally from Middletown, NY, 
I spent two years in Syracuse, where I earned my Associate’s degree in Computer Science from Onondaga Community College before returning to the Hudson Valley.
Currently, I work in the produce department at Health and Nutrition and live in town with my two roommates and my cat, Oreo, who is the light of my life.

I’ve completed all the required undergraduate Computer Science courses, except for the Projects course I’m taking this semester. 
Last semester, I had the opportunity to take Machine Learning and Web & Database Programming, which solidified my passion for web development.
One of my recent projects is a rebrand for the NYS ACE Women’s Network website. I collaborated with Graphic Design student Olivia Wilson to overhaul the 
website’s design, and I’m in the final stages of development. The updated site will be live soon: https://nyacewomen.org/.

Additionally, I created my portfolio website last semester: https://taylorpitman.com/. However, I’m already excited to redesign it to incorporate new 
skills I’ve learned recently.

I’m looking forward to strengthening my web development skills through this course, especially learning more about Vue as a framework.




## package.json notes
    * Server package.json is in the root folder (render wants to automatically look for it and we want it to be clear which is our main one)
    * Client package.json is in out client folder
    
    # scripts:
        This is where you want to put "shortcuts"/commands to put in the terminal to make computation faster and easier

    # dependencies: 
        This is where we list the name and version of the libraries/frameworks our application depends on
    
        # Senver (semantic versioning)
            * This is the version numbers you see ( ex. 4.21.2)
                major # - minor # - bugfix #

        :  "1.11.13" - npm will try to obtain that exact version
        : "~1.11.13" - npm will get the most recent bug fixes of the 1.11 updates 
        : "^1.11.13" - npm will get the most recent minor update since 1.11.13

    # dependencies: 
        These only gets installed on a developers system. Once we launch on a server, these wouldn't be downloaded.

        * Nodemon: Monitors files on your disk to make sure when there are updates in javascript, it restarts node for you.

    # Syntax notes:
        * no commas that dont go anywhere
        * variable/object names are quoted