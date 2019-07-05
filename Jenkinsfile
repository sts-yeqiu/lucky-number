pipeline {
  agent {
    docker {
      image 'tbari/node:build-10.15'
    }
  }
  stages {
    stage('build') {
      steps {
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

    stage('deploy') {
      steps {
        sh 'npm publish'
      }
    }
  }
}