// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(drivers, string){
    const filteredDrivers = drivers.filter(function(driver){
      return string.toLowerCase() === driver.toLowerCase()
    });
    return filteredDrivers;
  }

  function fuzzyMatch(drivers, string){
    let x = string.length
    const filteredDrivers = drivers.filter(
      function(driver){
    return string.toLowerCase() === driver.toLowerCase().substring(0,x)
  });
  return filteredDrivers;
}

function matchName(drivers, string) {
    const filteredDrivers = drivers.filter(
        function(driver){
        return string.toLowerCase() === driver.name.toLowerCase()
      });
      return filteredDrivers;
    }