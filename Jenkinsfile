
pipeline{
agent any 

stages{
    stage("Code Clone"){
        steps{
            echo "Cloning Code from Github"
            git url:"https://github.com/ank-2222/likeService", branch: "main"
        }
    }
    stage("build"){
        steps{
            echo "Building the Application Image"
            sh "docker build -t likeservice ."
        }
    }
    stage("Push to DockerHub"){
        steps{
           echo "Pushing To Docker Hub"
           withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
           sh "docker tag likeservice ${dockerHubUser}/likeservice:latest"
           sh "docker login -u ${dockerHubUser} -p ${dockerHubPass}"
           sh "docker push ${dockerHubUser}/likeservice:latest"  
           }
         
        }
    }
    stage("Deploye"){
        steps{
            echo "Deploying the app"
            sh "docker-compose down && docker-compose up"
        }
    }
}}
