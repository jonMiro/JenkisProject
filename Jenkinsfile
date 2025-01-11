pipeline {
    agent any
    parameters {
        string(name: 'EXECUTOR', defaultValue: '', description: 'Nom')
        string(name: 'MOTIU', defaultValue: '', description: 'Motiu de l\'execució')
        string(name: 'CHAT_ID', defaultValue: '', description: 'Chat ID de Telegram')
    }

    stages {
        stage('Petició de dades') {
            steps {
                script {
                    // Mostrem els valors de les variables
                    echo "Executor: ${params.EXECUTOR}"
                    echo "Motiu: ${params.MOTIU}"
                    echo "Chat ID: ${params.CHAT_ID}"
                }
            }
        }

        stage('Linter') {
            steps {
                script {
                    // Instal·lar les dependències del projecte, incloent ESLint si és necessari
                    echo 'Instal·lant dependències...'
                    bat 'npm install'

                    // Executar el linter (ESLint) per revisar el codi
                    echo 'Executant Linter...'
                    bat 'npx eslint .'

                    // Si hi ha errors, la pipeline fallarà i es mostrarà el log d'errors
                    echo 'Linter finalitzat'
                }
            }
        }

        // Aquí poden afegir més etapes...
    }

    post {
        success {
            echo "Pipeline finalitzada amb èxit!"
        }
        failure {
            echo "La pipeline ha fallat!"
        }
    }
}
