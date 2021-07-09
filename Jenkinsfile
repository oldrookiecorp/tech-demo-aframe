pipeline {
  agent any

  environment {
    HOME = '.'
  }

  stages {
    stage("Prepare") {
      agent any

      steps {
        echo 'Clonning Repository'

        git url: 'https://github.com/old-rookies/tech-demo-aframe.git',
            branch: 'master',
            credentialsId: 'jenkins-git'
      }

      post {
        success {
          echo 'Successfully Cloned Repository'
        }

        failure{
          echo 'Fail Cloned Repository'
        }
      }
    }

    stage("Deploy") {
      agent any

      steps {
        echo "Deploy"

        dir('.') {
          sh '''
          docker-compose up -d --build
          '''
        }

      }

      post {
        success {
          echo "Deploy Success!"

          mail  to: 'dev.gihong2012@gmail.com',
                subject: "Build # ${BUILD_TAG} Successed!",
                body: "Build # ${BUILD_TAG}: Check console output at ${BUILD_URL} to view the results."

          mail  to: 'hw.kim@oldrookiecorp.com',
                subject: "Build # ${BUILD_TAG} Successed!",
                body: "Build # ${BUILD_TAG}: Check console output at ${BUILD_URL} to view the results."
        }

        failure {
          echo "Deploy Failed"

          mail  to: 'dev.gihong2012@gmail.com',
                subject: "Build # ${BUILD_TAG} Failed!",
                body: "Build # ${BUILD_TAG}: Check console output at ${BUILD_URL} to view the results."

          mail  to: 'hw.kim@oldrookiecorp.com',
                subject: "Build # ${BUILD_TAG} Failed!",
                body: "Build # ${BUILD_TAG}: Check console output at ${BUILD_URL} to view the results."
        }
      }
    }
  }
}