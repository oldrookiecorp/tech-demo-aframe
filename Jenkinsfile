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
      echo "Deploy"

      dir {
        sh '''
        docker-compose up --build
        '''
      }

      post {
        success {
          echo "Deploy Success!"

          mail  to: 'dev.gihong2012@gmail.com',
                subject: "${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}!",
                body: "${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}:\n
                \n
                Check console output at ${BUILD_URL} to view the results."
        }

        failure {
          echo "Deploy Failed"

          mail  to: 'dev.gihong2012@gmail.com',
                subject: "${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}!",
                body: "${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}:
                
                Check console output at ${BUILD_URL} to view the results."
        }
      }
    }
  }
}