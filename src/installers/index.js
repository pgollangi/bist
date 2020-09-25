const { GithubInstaller } = require('./github')

const installers = [GithubInstaller]

function getInstaller (repo, options) {
  for (const I of installers) {
    var installer = new I(repo, options)
    if (installer.canInstall()) {
      return installer
    }
  }
  return undefined
}

exports.getInstaller = getInstaller
