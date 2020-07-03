<template>
  <div> 
        <v-btn x-large class="primary mt-15" fab fixed top right route to="/Nginx">
            <v-icon>mdi-home</v-icon>
        </v-btn><br/>
              
      <div v-show="parseInt($route.params.id) === 1">
          <h1 class="grey--text ma-5">Introduction to web server </h1>
          <v-divider></v-divider>
          <v-img :aspect-ratio="10/3" src="../../assets/server.jpg"></v-img>
          <p class="ma-5 lh-3 pa-5 ma-5">
              When we talk about severs generally the picture displayed above is what comes to our mind, but what if I say your personal devices i.e laptop/desktop or even your smartphone can be a server, well with the right set of tools this is completely possible. This tutorial session aims to help you to get a better understanding of web server and also you will implement your own web server with Nginx and Ubuntu which will serve static web pages by the end of this nginx course, let's dive deep into the world of servers. Before we start with the fancy words and technical jargon, let us try to understand what a web server is in simple terms, basically any centralized device which can communicate with other devices to receive a request and server the requested data can be considered as a server, for example, Professorscollab, when you open www.professorscollab.xyz all that you see are contents pre-written on file which is rendered into a fancy looking page but on grassroot level, it is just a collection of words stored in a file the file itself stored on a computer storage(hard drive or solid state drive), what makes the computer that holds the files for Professorscollab different from the machine that you are using is just a set of tools, so with the right set of tools even your computer can serve files over the Internet. <br/><br/>
              Although there are dedicated server operating systems i.e windows server 2019, ubuntu server, oracle linux, etc, in this course we will be focusing on a specific web server software nginx along with a nonserver version of ubuntu, just like any other web server software nginx can turn any supported operating system into a server that can serve static or dynamic files over local network or Internet. In the next chapter, we will have an in-depth look on the functionalities of server<br/><br/>
          </p>
          <v-container>
          <v-layout>
              <v-flex xs12 md10></v-flex>
              <v-flex xs12 md2>
                  <v-btn class="primary" fab x-large route to="/NginxContent/2">
                     <v-icon>mdi-skip-next</v-icon>
                  </v-btn>
              </v-flex>
          </v-layout>
      </v-container>
      </div>


      <!--Ports-->

      <div v-show="parseInt($route.params.id) === 2">
          <h1 class="grey--text ma-5">Ports</h1>
          <v-divider></v-divider>
          <p class="ma-5 lh-3 pa-5 ma-10">
              Before we start with servers, let us understand what are ports, in terms of computer networking you can consider port as a virtual logic on software level that is associated with different numbers to provide different service by any operating system. Below mentioned are few of the well-known ports. <br/><br/>
              <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Port Name</th>
                            <th class="text-left">Port Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="port in ports" :key="port.name">
                            <td>{{ port.name }}</td>
                            <td>{{ port.number }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table> <br/><br/>
            for more details about ports you can visit <a href="https://en.wikipedia.org/wiki/Port_(computer_networking)" target="_blank">Port-wikipedia</a> page
          </p>
          <v-container>
          <v-layout>
              <v-flex xs12 md2>
                  <v-btn class="primary" fab large route to="/NginxContent/1">
                    <v-icon>mdi-skip-previous</v-icon>
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8></v-flex>
              <v-flex xs12 md2>
                  <v-btn class="primary" fab large route to="/NginxContent/3">
                    <v-icon>mdi-skip-next</v-icon>
                  </v-btn>
              </v-flex>
          </v-layout>
      </v-container>
      </div>

      <!--Sever functionalities-->

      <div v-show="parseInt($route.params.id) === 3">
          <h1 class="grey--text ma-5">Sever functionalities</h1>
          <v-divider></v-divider>
          <v-img :aspect-ratio="10/4" src="../../assets/server.png"></v-img>
          <p class="ma-5 lh-3 pa-5 ma-10">
              Now as you have a better understanding of ports, we can start with the server concepts. In really simple terms the basic function of a server is to listen on a pre-defined port for incoming network requests, for example, a software that listens to all the network requests on port 25 is a Mail server, if you recall the previous ports table you might have noticed port number 25 is dedicated for Simple Mail Transfer Protocol, likewise a software that listens to all incoming network request on port 80 is a web server, as port 80 is for Hypertext Transfer Protocol which is the standard for serving webpages.
              <br/><br/>  
              If you are wondring how a software can listen to this ports, below mentioned is a simple configuration for a nginx server, please do not worry if you do not understand the code, we will disccuss about the configurations on a later stage.<br/><br/>
              server {<br/>
               listen 80;<br/>
               root /var/www/html/test;<br/>
               index index.html;<br/>
               server_name example.com www.example.com<br/>
               location / {<br/>
               try_files $uri $uri/ =400;<br/>
               }<br/>
              }<br/><br/>
              To understand how a web server software works, we will start with a simple example of Microsoft Paint. Paint gives you a blank canvas and a set of tools, you can configure the tools are per your needs like increase the brush size, changes color, draw shapes etc, because of this flexibility you can draw anything you want to draw, likewise you can consider any webserver software gives you a set of tools, which you can configure as per your needs.
              The above code has a simple configuration which asks nginx to listen on port 80, for any request from example.com once and once nginx receives a request on it will look for index.html in directory /var/www/html/test and if the file is available nginx will send it to the client, if the file is not available nginx will send 404 file not available code to clien.
              In the next chapter, we will discuss about various web server software available.
          </p>
          <v-container>
          <v-layout>
              <v-flex xs12 md2>
                  <v-btn class="primary" fab large route to="/NginxContent/2">
                    <v-icon>mdi-skip-previous</v-icon> 
                  </v-btn>
              </v-flex>
              <v-flex xs12 md8></v-flex>
              <v-flex xs12 md2>
                  <!--<v-btn class="primary" large route to="/NginxContent/4">
                    Next chapter <v-icon>mdi-skip-next</v-icon>
                  </v-btn>-->
              </v-flex>
          </v-layout>
      </v-container>
      </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        ports: [
          {
            name: 'File Transfer Protocol',
            number: 20,
          },
          {
            name: '	Secure Shell ',
            number: 22,
          },
          {
            name: 'Simple Mail Transfer Protocol ',
            number: 25,
          },
          {
            name: 'Domain Name System',
            number: 53,
          },
          {
            name: 'Hypertext Transfer Protocol ',
            number: 80,
          },
          {
            name: 'HTTP Secure',
            number: 443,
          },
        ],
      }
    },
  }
</script>