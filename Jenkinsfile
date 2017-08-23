node {
    def app
    
    //sh 'ls -als'
    //sh 'git status'
    echo sh(returnStdout: true, script: 'env')
 
    // determine next build number
    def major
    def minor
    //def branches = sh(script: 'git ls-remote -q', returnStdout: true).split('\r?\n')	
    sh 'git fetch'
    def branches = sh(script: 'git branch -a --list "*/release/*"', returnStdout: true).split('\r?\n')
    println branches
    branches.each { 
      println "line ${it}"
      if(it =~ /release/) {
        println "line ${it}"
	def lastReleaseNumber = it.split('/').last()
	println "last release #: ${lastReleaseNumber}"
	major = lastReleaseNumber.split(/\./).first() as Integer
	minor = lastReleaseNumber.split(/\./).last() as Integer
      }
    }		
    println "after iterator"
    minor = minor + 1
    def build = env.BUILD_NUMBER
	
    println "major: ${major} minor: ${minor} build: ${build}"
    def packageVersion = "${major}.${minor}.${build}"
    if(env.BRANCH_NAME == 'develop') {
      packageVersion += "-" + env.BRANCH_NAME
    }
    println "package: ${packageVersion}"
	
    stage('Clone repository') {
        echo 'Pulling...' + env.BRANCH_NAME
        checkout scm
    }

    stage('Build image') {
        //sh 'printenv'
	echo 'building image version ${packageVersion}'
        app = docker.build("empower/test-build")
    }

    stage('Test image') {
        //app.inside {
            sh 'echo "Run tests..."'
        //}
    }

    if(env.BRANCH_NAME == 'develop') {
    	stage('Deploy image') {
	  echo 'deploying version ${packageVersion} to CD environment'
	}
    }
}
