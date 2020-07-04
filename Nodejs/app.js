var cat = require("cat-me");
var jokes = require("knock-knock-jokes");
var faker = require("faker");
console.log(cat());
console.log(jokes());

console.log("=============================================");
console.log("Fake Random Information for dummy data need");
console.log("=============================================");
for (var i = 0; i < 10; i++) {
  console.log(faker.name.firstName() + " " + faker.name.lastName());
  console.log(faker.name.jobTitle());
  console.log(faker.address.city());
  console.log(faker.address.country());
  console.log(faker.company.companyName());
  console.log(faker.company.companySuffix());
  console.log(faker.phone.phoneNumber());
  console.log("*********************************************");
}
