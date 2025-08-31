// export default function New() {
// const arr = [
//   { id: 1, name: "Ana" },
//   { id: 2, name: "Luis" },
//   { id: 1, name: "Ana" }, // duplicado
// ];

// const unique = arr.filter((obj,index,self) =>
// index === self.findIndex(o => o.id === obj.id)
// ) 
//obj es el objeto del array revisado, index es su podisicion en el array y self es el array completo
// console.log(unique);

//new Map es como new Set pero para objetos, en Map el primer valor del array interno es la key, y el segundo valor es el value, si lo ve repetido lo desecha
//se computa toda la linea y el ... devuelve un array(de objetos en este caso)
//values se utiliza para sacar solo el value del Map
// const unique2= [...new Map(arr.map(obj => [obj.id, obj])).values()]

// console.log('1222',unique2);

// const unique3 = arr.reduce((acc, obj) => {
//     console.log('objeto itrd', obj);
//     console.log('Set antes', acc.map);
    
//     if (!acc.map.has(obj.id)) {
//         acc.map.add(obj.id);
//         acc.result.push(obj);
//     }
//     console.log('set despues' ,acc.map);
//     console.log('resultado parcial', acc.result);
//     console.log('-----');
//     return acc;    
// }, { map: new Set(), result: [] }).result;
// console.log('ressss',unique3);

//     return <h1>hola mundo</h1>
// }