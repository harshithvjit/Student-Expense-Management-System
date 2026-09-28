pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {
                checkout scm
            }

        }

        stage('Build Docker Image') {

            steps {
                bat 'docker build -t student-expense-system .'
            }

        }

        stage('Stop Old Container') {

            steps {
                bat 'docker stop student-expense-container || exit /b 0'
            }

        }

        stage('Remove Old Container') {

            steps {
                bat 'docker rm student-expense-container || exit /b 0'
            }

        }

        stage('Run New Container') {

            steps {
                bat 'docker run -d -p 8084:80 --name student-expense-container student-expense-system'
            }

        }

    }

}