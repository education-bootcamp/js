person = {
    id: '001',
    name: 'Nimal',
    address: 'Colombo',
    salary: 20000
};
console.log(person);
console.log('=========');
console.log(person.address);
console.log('=========')
console.log(person['name']);
function setData(brand, color, type) {
    // let var const
    let vehicle = {
        brand: brand,
        color: color,
        type: type,
        specifications:['⚙','🧠'],
        calculate:()=>25000/2
    }
    return vehicle;
}
tempVehicle=setData('BMW','Black','Sport');
console.log(tempVehicle);
console.log(tempVehicle.calculate());
console.log(tempVehicle.specifications);
console.log(tempVehicle.specifications[0]);