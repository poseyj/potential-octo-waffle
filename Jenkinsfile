node {
    def app
    
    //sh 'ls -als'
    //sh 'git status'
    //echo sh(returnStdout: true, script: 'env')
 
    //sh 'git fetch'
    def branches = sh(script: 'git ls-remote -q', returnStdout: true).split('\r?\n')	
    def last
    branches.each { 
      if(it =~ /release/) {
        println "line ${it}"
	${it}.split('/').last()
	println "last release #: ${last}"
      }
    }		
    println branches
		
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

    if(env.BRANCH_NAME == 'develop') {
    	stage('Deploy image') {
	  echo 'deploying develop to CD environment'
	}
    }
}
