
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 5000,
    years: 5,
    rate: 8.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('102.10')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5082,
    years: 5,
    rate: 8.3
  };
  expext(calculateMonthlyPayment(values)).toEqual('103.78')
});

it("should handle terribly high rates", function() {
  const values = {
    amount: 5000,
    years: 50,
    rate: 99.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('416.25')
});
