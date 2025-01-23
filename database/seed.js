import { faker } from '@faker-js/faker'

const fullName = faker.person.fullName()
const persionBio = faker.person.bio()
const persionJobTitle = faker.person.jobTitle()
const persionJobDescriptor = faker.person.jobDescriptor()
const persionJobArea = faker.person.jobArea()
const persionJobType = faker.person.jobType()

console.log(fullName)
console.log(persionBio)
console.log(persionJobTitle)
console.log(persionJobDescriptor)
console.log(persionJobArea)
console.log(persionJobType)
