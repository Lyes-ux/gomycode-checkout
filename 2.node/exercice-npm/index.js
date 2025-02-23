
import { faker } from '@faker-js/faker';

function generateWorker(){
    return {
         Name : faker.person.fullName(), 
         Email : faker.internet.email(), 
         Address : faker.location.streetAddress(), 
         PhoneNumber : faker.phone.number(), 
         Company : faker.company.name(),
         animal : faker.animal.petName() 
    }
}

console.log(
generateWorker(),
generateWorker(),
)