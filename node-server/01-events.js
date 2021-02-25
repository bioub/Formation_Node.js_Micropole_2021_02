const { EventEmitter } = require('events');

class UserService extends EventEmitter {
  register(user) {
    // TODO INSERT user in Database

    process.nextTick(() => {
      this.emit('user.registered', user);
    })

  }
}


const userServiceProject1 = new UserService();

userServiceProject1.on('user.registered', (user) => {
  // TODO send email
  console.log('sending email to ' + user.username);
})

userServiceProject1.register({
  username: 'romain'
});

const userServiceProject2 = new UserService();

function callbackSMS(user) {
  // TODO send sms
  console.log('sending sms to ' + user.username);
}

userServiceProject2.on('user.registered', callbackSMS)

userServiceProject2.register({
  username: 'laurent'
});

userServiceProject2.removeAllListeners('user.registered')

userServiceProject2.register({
  username: 'bob'
});

console.log('FIN');
