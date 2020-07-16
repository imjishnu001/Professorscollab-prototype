<template>
    <div>
       {{visitor()}}
       <v-btn xs12 md6 class="primary mt-15" fab fixed top right route to="/">
            <v-icon>mdi-home</v-icon>
        </v-btn><br/><br/><br/>
        <!--Video Tutorial-->

         <!--<v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="790">
               <template v-slot:activator="{ on, attrs }">
                  <v-btn
                     color="primary"
                     dark
                     v-bind="attrs"
                     v-on="on"
                  >
                  Launch Video Tutorial
                  </v-btn>
               </template>
               <v-card>
                  <video width="100%" height="100%" controls>
                     <source src="GitTest.mp4" type="video/mp4">
                     <source src="movie.ogg" type="video/ogg">
                     Your browser does not support the video tag.
                  </video>
                  <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary darken-1" @click="dialog = false">Close</v-btn>
               </v-card-actions>
               </v-card>
            </v-dialog>
         </v-row> -->
        <!-- END Video Tutorial-->
        <h1 class="grey--text ma-10">Introduction</h1>
        <p class="ma-10 font-weight-bold grey--text">
            Git and Github are two different entities, as we have established that fact let us try to understand how they are different but still co-dependent. Throughout this tutorial session we will try to understand what is Git and Github and how to use them for version control on your next project. This course only aims to get you introduced to the concepts and have a hands-on experience on the basics of version control. We will release a follow tutorial which will cover more advanced topics soon. Without any further ado, let's dive deep into the word of the version control system.
         </p>   
         <h2 class="ma-10 grey--text">What is Git?</h2> 
         <p class="ma-10 font-weight-bold grey--text"> Git was invented by Linus Torvalds the same person who was the principal developer of the Linux kernel. As per the description on the official website. "Git is a free and open-source distributed version control system " , If you haven't heard of these terms, they might sound link some jargons, basically any project where the code is openly available for anyone to modify the software as per their needs is a open-source software,A distributed version control system allows developers to keep the project updates offline and merge it whenever required, you will have a better understanding once we talk about branches, which will be released in the follow-up session. Let us try to understand what are the use cases of any version control system. The primary use of version control system is to keep a track of modifications made to any section of a project, it can be a simple text file or a large software written throughout hundreds of files, version control is highly useful in projects developed by a team as it help to track the changes that were made by team members, which is a crucial part of project management. Git is also really useful to individual developers. Git works over command line, you can download git from <a href="https://git-scm.com/download/win" target="_blank">Git download</a> for windows, most of the linux distribution already include git.

 To confirm if git is successfully installed or not, you can open up windows(cmd) or linux terminal and run git command if it is installed successfully, you will get a screen similar to the one listed below. <v-img :aspect-ratio="15/3" src="gitInstall.png" class="ma-5"></v-img>

 Note: Git has a dedicated command line tool called git bash which is a part of the git installation, you can use that as well, instead of windows command prompt if you prefer.<br/><br/>

 </p> 
        <h2 class="ma-10 grey--text">What is Github?</h2> 
         <p class="ma-10 font-weight-bold grey--text">
            At it's core Github is a cloud hosting(storage) platform for git repositories. A repository is a directory(folder) that holds the projects, but Github as a tool is much more than that, Github can be used to collaborate and develop projects, Majority of the open source projects are shared on Github. In 2018 Git was acquired by Microsoft for a staggering amount of $7.5 billion in stock.
         </p>
        <h2 class="ma-10 grey--text">Let's get started</h2> 
         <p class="ma-10 font-weight-bold grey--text">
             To follow along you need a Github account <a href="https://github.com/" target="_blank">www.github.com</a>. 
            <br/><br/>
            Assuming that you have a Github account, let's start by creating a git hub repository. There are few different ways to create a new repository.<br/><br/>
            <span>You can either click on New or Your repository -> New, to create a new repository both the options are highlighted in the image displayed below.</span>
            <v-img :aspect-ratio="15/7" src="githubNew.png" class="ma-5"></v-img>
            Once you click on new, you will be taken to the below displayed page where you can create a new repository. You will have to enter the project name, description and select whether you would like to keep the project public or private. Once you have filled all the details you can click on create repository to complete the process<br/><br/>
            Note: A repository name must be unique, while you are typing the name, name will be validated and you will be notified if the name can be used or not. 
            <v-img :aspect-ratio="15/7" src="githubRepo.png" class="ma-5"></v-img>
            On the next page you will get the link of your newly created Github repository, the highlighted section in the below image is the where you get link for your repository which can be later used to push or pull data to or from Github.
            <v-img :aspect-ratio="15/3" src="githubLink.png" id="repoLink" class="ma-5"></v-img><br/><br/>
           Keep this link handy, it will be used once we get to the part where we push our project to gitHub.
            Hope you have installed git on your computer, if not please <a href="https://git-scm.com/download/win" target="_blank">click here</a> to download git and install it before proceeding further. 
            Below listed is the structure we will be working with, I have created a new folder inside C: drive with the name Tutorial, inside Tutorial folder we have 2 files and 1 sub folder.
            <v-img :aspect-ratio="15/3" src="filesStruct.png" class="ma-5"></v-img><br/><br/>
            Now we will launch windows command prompt and move to the Tutorial folder by using the cd command , cd command works even on mac and linux based operating systems to change directory. 
            <v-img :aspect-ratio="15/1.5" src="cmd1.png" class="ma-5"></v-img><br/><br/>
            Now we need git to access this folder for us to use the functionalities of git, and for that we will use git init command. if git is installed after running the command you will see the following screen.
            <v-img :aspect-ratio="15/1.5" src="cmd2.png" class="ma-5"></v-img><br/><br/>
            If you open the Tutorial folder you will see a new directory named .git created automatically (if you don't see it you can change windows settings to show hidden folder and files), this directory will contain all the git configuration, we will not make any changes to this directory.
            <v-img :aspect-ratio="15/1.5" src="gitInit.png" class="ma-5"></v-img><br/><br/>
            Now we will switch back to command prompt and check few other commands provided by git.<br/><br/>
            <span class="display-1">1) git status </span><br/><br/>
            git status command will help us to track the files that have been modified and not updated in the git repository. 
            <v-img :aspect-ratio="15/4.3" src="cmd3.png" class="ma-5"></v-img><br/><br/>
            Let us try to understand the result of git status command.<br/><br/>

            "On branch master" : You can consider branch as the main directory(folder) which holds sub folders and each sub folder can be considered a version of your project that's a extremely simplified explanation, any git repository can have multiple branches we will have a in-depth discussion about branches in the follow up tutorial. For this session we will only work with master branch which is the default branch created by git.<br/><br/>
            "No commits yet" : any changes made to a git repository is called commit, we haven't pushed any file to our git repository yet hence we got No commits yet. once you make the first commit post that you won't get this result under git status.<br/><br/>
            "Untracked files" : Git have located files which are either not pushed to get repository or the files have already have been pushed but locally the files have been changed and are not updated in the get repository. you can see both the files and folder in red as we haven't pushed the files to our repository yet.<br/><br/> 
            <span class="display-1">2) git add</span><br/><br/>
            <v-img :aspect-ratio="15/1" src="cmd4.png" class="ma-5"></v-img><br/><br/>
            git add command is used to add the files from working directory to the queue which will be pushed to the repository with the next commit.<br/>
            There are two ways to add files to the queue.<br/><br/>
            *) git add . (. after add will put all the files in the current working directory to the queue)<br/>
            *) git add file1.txt file2.txt (you can also manually select the files to be added in the queue)<br/><br/>
            <span class="display-1">3) git commit</span><br/><br/>
            <v-img :aspect-ratio="15/3" src="cmd5.png" class="ma-5"></v-img><br/><br/>
            git commit command will push the files listed in the queue to the local repository<br/>
            -m is a flag used to pass a message along with the commit, usually this flag is used to mention the changes made before the commit.<br/>
            Congratulations you have successfully pushed your first project to local git repository.<br/><br/>
            <span class="display-1">4) git log</span><br/><br/>
            <v-img :aspect-ratio="15/2.5" src="cmd6.png" class="ma-5"></v-img><br/><br/>
            Using git log command we can track all the commits we have made, every commit is logged with an automatically generated alphanumeric string, git log will additionally display who made the commit, when the commit was made and the commit comment.<br/><br/>
            <span class="display-1">For practice</span><br/><br/>
            Before we move on to the next command, I will update file 1 and commit it, and then lets check the log again.<br/>
            <v-img :aspect-ratio="15/7.9" src="cmd7.png" class="ma-5"></v-img><br/><br/>
            As you can see git status was able to figure out that I made changes in File1.txt after the commit, when I check git log, now I can see both the commits.<br/><br/>
            <span class="display-1">5) git checkout </span><br/><br/>
            Let's say for some reason you want to undo all the changes that you have made after the last commit, and rollback to previous commit, you can use git checkout command.<br/><br/>
            git checkout commit id<br/><br/>
            Note: You might get a branch related warning, we will discuss  that in that follow-up tutorial along with branches.
            <v-img :aspect-ratio="15/8.8" src="cmd8.png" class="ma-5"></v-img><br/><br/>
            Now if you open the edited file you can see that the changes you have made will be rolled back.<br/><br/>
            <span class="display-1">What next ?</span><br/><br/>
            We have completed the basics of the git, now you have hands-on experience with git and know how to make commits and checkouts, to keep this tutorial short we have not discussed about few other concepts of git which will be covered in the follow-up session, however we still have one topic get for this tutorial, as mentioned in the first line of the tutorial git and Github are 2 different entities, as we have covered the basics of Git we can now move to Github, we made a repository in Github, but all our commits were save locally, in simple terms the commits and repository that we have worked on till now is stored on your machine and it can't be accessed by other computers globally. Now we will learn to push our project to GitHub so that it can be accessed globally.<br/><br/>
            <span class="display-1">5) git remote add </span><br/><br/> 
            Using git remote add we can specify git that we want to push our project to a remote hosting service, that's where Github and other version control hosting services come the into picture. now we need the repository link that we created <a href="#repoLink">previously</a>
            <v-img :aspect-ratio="15/1.5" src="cmdRemoteAdd.png" class="ma-5"></v-img><br/><br/>
            Note: we will discuss the term origin along with next command.<br/><br/>
            <span class="display-1">6) git push </span><br/><br/>
            git push command is used to push the project to remote hosting, in this case Github.
            <v-img :aspect-ratio="15/3" src="gitPush.png" class="ma-5"></v-img><br/><br/>
            Note: The term origin stands for original repository ideally the computer where git init command was made and master stands for the main branch.<br/><br/>
            <span class="display-1">7) git clone and git pull </span><br/><br/>
            We have learned how to push our project to Github now let's learn how to get the project on any other computer, from the GitHub portal you have the option to download the project as a zip file, but the better way would be to clone the project. On the machine where you would like to download your project install Git and run the git clone command as shown in the picture.  
            <v-img :aspect-ratio="15/6" src="gitClone.png" class="ma-5"></v-img><br/><br/>
            the command structure is:
            git clone link folder name<br/><br/>
            we need the repository link that we created <a href="#repoLink">previously</a>, and you can name the folder anything.

            Note: once the project is cloned and in further if you push a update to Github, you can use the git pull command to get the updated project on the machine where project was cloned. Make sure that you are in the folder where you have cloned the project to make git pull work.
         </p>
         <h1 class="grey--text text-center">The End</h1>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
       visitor: function(){
      let dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
      let visitor = window.location.href.toString().slice(7).slice(0,-1);
      let page = this.$route.name;
       fetch('https://professorscollab.xyz:8443/api/visitor',{
        method:'POST',
        body: JSON.stringify({ 
        visitor: visitor, 
        page: page, 
        dateTime: dateTime 
        }), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      return; 
    }
    }
  }
</script>