pipeline {
    agent any
    parameters {
        string(name: 'EXECUTOR', defaultValue: '', description: 'Nom')
        string(name: 'MOTIU', defaultValue: '', description: 'Motiu')
        string(name: 'CHAT_ID', defaultValue: '', description: 'Chat ID')
    }
    
    stages {
        stage('Petició de dades') {
            steps {
                script {
                    // Mostrem els valors 
                    echo "Executor: ${params.EXECUTOR}"
                    echo "Motiu: ${params.MOTIU}"
                    echo "Chat ID: ${params.CHAT_ID}"
                }
            }
        }

    
    }
}
