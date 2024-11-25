pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/VietDucc/WebSocket.git'
            }
        }
        stage('Build Backend') {
            steps {
                dir('backend') {
                    script {
                        sh 'docker build -t websocket-backend .'
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    script {
                        sh 'docker build -t websocket-frontend .'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh 'docker-compose down' // Ngắt container nếu cần
        }
    }
}
