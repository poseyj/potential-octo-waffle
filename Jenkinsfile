node {
    def app
    
    sh 'ls -als'
    sh 'git status'
    echo sh(returnStdout: true, script: 'env')
    //def pwdCmd = "pwd"
    //def proc1 = pwdCmd.execute()
    //proc1.consumeProcessOutput(sout, serr)	
    //proc1.waitFor()
    //p/rintln "out> $sout err> $serr"
    //println "after pwd"
 
    def x = sh(script: 'git branch -a --list "*"', returnStdout: true)
    println x
    def branchCmd = "git branch -a --list '*'"
    def proc = branchCmd.execute()
    proc.waitFor() 
    if ( proc.exitValue() != 0 ) {
      println "Error, ${proc.err.text}"
      System.exit(-1)
    }
    //def branches = proc.in.text.readLines().collect { 
    //	it.replaceAll(/[a-z0-9]*\trefs\/heads\//, '') 
    //}	
    //println branches
	
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
