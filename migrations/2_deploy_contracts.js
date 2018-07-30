var SRS20Mock = artifacts.require('./mocks/SRS20Mock')
// var MessagesAndCodes = artifacts.require('./libraries/MessagesAndCodes')

const initialBalance = '100000000000000000000' // 100 tokens when decimals is 18

module.exports = function(deployer, network, [initialAccount, ...accounts]) {
  deployer.then(async () => {
    try {
      await deployer.deploy(SRS20Mock, initialAccount, initialBalance)
    } catch (err) {
      console.log(('Failed to Deploy Contracts', err))
    }
  })
}
