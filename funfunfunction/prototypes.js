function talk() {
    console.log(this.sound)
}

let animal = {
    talk: talk
}

// let cat = {
//     sound: "meow"
// }

let dog = {
    sound: 'woof'
}
let prarieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase())
    }
}

Object.setPrototypeOf(dog, animal)
animal.talk = function() {
    console.log('I am a teapot')
}
dog.talk()
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()