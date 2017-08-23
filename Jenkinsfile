node {
    def app

    stage('Clone repository') {
        echo 'Pulling...' + env.BRANCH_NAME
        checkout scm
    }

    stage('Build image') {
        //sh 'printenv'
	echo 'build image'
        app = docker.build("empower/test-build")
    }

    stage('Test image') {
        //app.inside {
            sh 'echo "Run tests..."'
        //}
    }

    stage('Push image') {
	sh 'echo push image'
    }
}
