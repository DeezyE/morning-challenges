let talk = function () {
    console.log(this.sound)
}

let boromir = {
    sound: 'One does simply walk into Mordor',
    blabber: talk,
}

let gollum = {
    jabber: boromir.blabber,
    sound: 'My precious'
}

gollum.jabber()

// boromir.speak = talk.bind(boromir)
// let talkBoundToBoromir = talk.bind(boromir)
// talkBoundToBoromir()

// let blabber = boromir.speak
// blabber()