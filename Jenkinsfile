node {
    def app

    stage('Clone repository') {
        echo 'Pulling...' + env.BRANCH_NAME
        checkout scm
    }

    stage('Build image') {
        sh 'printenv'
	sh 'build image'
        /*app = docker.build("empower/empower-api")*/
    }

    stage('Test image') {
        //app.inside {
            sh 'echo "Run tests..."'
        //}
    }

    stage('Push image') {
		sh 'push image'
    }
}
