pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                script {
                    currentBuild.displayName = "#${env.BUILD_NUMBER} ${env.BRANCH_NAME}"
                }
                echo 'Building..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}