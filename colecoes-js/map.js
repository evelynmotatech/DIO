function getAdmins(map){
  let admins = [];
 for([key, value] of map){
   if(value === 'Admin'){
    admins.push(key)
   }
 }
 return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'User');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));