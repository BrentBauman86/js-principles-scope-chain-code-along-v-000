/* Your code goes here */
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bob';

function reassignLeastFavorite() {
    leastFavoriteCustomer = 'someone other then bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "not bob";
  let favoriteCustomer = 'def not bob';
}
